import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../Actions/UserActions'
import axios from 'axios'
import { PROFILE_ENDPOINT, TOP_ARTISTS_ENDPOINT, TOP_TRACKS_ENDPOINT, SEARCH_ENDPOINT, parseSpecialCharacters } from '../../../../utils/constants'
import {createAndFetchUser, fetchUser} from '../../../../firebase.js'


export function* initializeUserData({token}){
    yield put (Actions.getTopArtistsRequested(token))
    yield put (Actions.getTopTracksRequested(token))
    yield put (Actions.getProfileRequested(token))
}

export function* getProfile({token}) {
    try {
        const response = yield call(axios.get,PROFILE_ENDPOINT,
            {
            headers: {
            'Authorization': 'Bearer ' + token
            }
          })
        
        if(response){
            console.log(response)
            yield put(Actions.getProfileSucceeded(response.data))
            yield put (Actions.setDatabaseUserRequested(response.data))
        }
        else {
            yield put (Actions.getProfileFailed('Could not get profile'))
        }

    }
    catch(error){
        yield put (Actions.getProfileFailed(error))
    }
}

//After Spotify authenticates, pull the data from firebase or create a new user
export function* setDatabaseUser({data}) {    
    const {email,id,display_name} = data
    console.log(data)

    try{
        const parsedId = parseSpecialCharacters(id)
        console.log(parsedId)
        const user = yield fetchUser(parsedId)
        if(!user){
            yield call(createAndFetchUser(parsedId,display_name,email))
            user = {
                email:email,
                id:parsedId,
                display_name:display_name
            }
        }
        yield put(Actions.setDatabaseUserSucceeded(user))
        
    }
    catch(error){
        try{
            const {email,id,display_name} = data
            const parsedId = parseSpecialCharacters(id)
            const user = {
                email:email,
                userId:parsedId,
                display_name:display_name
            }
            yield call(createAndFetchUser(parsedId,display_name,email))
            yield put(Actions.setDatabaseUserSucceeded(user))

        }
        catch(error){
            yield put (Actions.setDatabaseUserFailed(error))
            console.log(error)
        }
    }

}

export function* getTopArtists({token}) {
    try {
        const response =  yield call(axios.get,TOP_ARTISTS_ENDPOINT,
            { headers: {'Authorization': 'Bearer ' + token }})

        if(response) {
            const topArtists = response.data.items
            yield put(Actions.getTopArtistsSucceeded(topArtists))
        }
        else {
            yield put(Actions.getTopArtistsFailed('Could not get top Artists'))
        }
    }
    catch(error) {
        yield put(Actions.getTopArtistsFailed(error))
    }

}

export function* getTopTracks({token}) {
    try {
        const response =  yield call(axios.get,TOP_TRACKS_ENDPOINT,
            { headers: {'Authorization': 'Bearer ' + token }})
        if(response) {
            console.log(response)
            const topTracks = response.data.items
            console.log(topTracks)
            yield put(Actions.getTopTracksSucceeded(topTracks))
        }
        else {
            yield put(Actions.getTopTracksFailed('Could not get top tracks'))
        }
    
    }
    catch(error) {
        yield put(Actions.getTopTracksFailed(error))
    }

}
export function* searchSongs({token,searchValue = ''}) {
    try {
        var response = null
        if(searchValue){
        response =  yield call(axios.get, SEARCH_ENDPOINT,
        {headers: {'Authorization': 'Bearer ' + token},
            params: {
                'q':searchValue, 
                'type':'track'
            },
        })
        }
        if(response) {
            const searchedSongs = response.data.tracks.items
            console.log(searchedSongs)
            yield put(Actions.searchSongsSucceeded(searchedSongs))
        }
        else {
            yield put(Actions.searchSongsFailed('Could not get top tracks'))
        }
    }
    catch(error) {
        yield put(Actions.searchSongsFailed(error))
    }
}

export default function* () {
    yield all([
        yield takeLatest(Actions.UserDataActions.GET_PROFILE_Requested, getProfile),
        yield takeLatest(Actions.UserDataActions.STORE_TOKEN, initializeUserData),
        yield takeLatest(Actions.UserDataActions.GET_TOP_ARTISTS_Requested, getTopArtists),
        yield takeLatest(Actions.UserDataActions.GET_TOP_TRACKS_Requested, getTopTracks),
        yield takeLatest(Actions.UserDataActions.setDatabaseUserRequested, setDatabaseUser),
        yield takeLatest(Actions.UserDataActions.searchSongsRequested, searchSongs)
    ]);
}
