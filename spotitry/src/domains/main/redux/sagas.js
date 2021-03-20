import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from './actions'
import axios from 'axios'
import { PROFILE_ENDPOINT, TOP_ARTISTS_ENDPOINT} from '../../../utils/constants'
import { authentication, createAndFetchUser, fetchUser} from '../../../firebase.js'
import { getProfileSucceeded } from './actions'

export function* getProfile(action) {
    const {token} = action
    var profile
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
export function* setDatabaseUser({data}) {    const {email,id,display_name} = data
    const user = yield fetchUser(id)
    if(!user){
        yield call(createAndFetchUser(id,display_name,email))
    }
    yield put(Actions.setDatabaseUserSucceeded(user))

}

export function* getTopArtists(action) {
    const {token} = action
    try {
        const response =  yield call(axios.get,TOP_ARTISTS_ENDPOINT,
            { headers: {'Authorization': 'Bearer ' + token }})

        if(response) {
            yield put(Actions.getTopArtistsSucceeded(response.data))
        }
        else {
            yield put(Actions.getTopArtistsFailed('Could not get top Artists'))
        }
    
    }
    catch(error) {
        yield put(Actions.getTopArtistsFailed(error))
    }

}

export function* getTopTracks(token) {
    try {
        const response =  yield call(axios.get,TOP_ARTISTS_ENDPOINT,
            { headers: {'Authorization': 'Bearer ' + token }})
        if(response) {
            yield put(Actions.getTopTracksSucceeded(response.data))
        }
        else {
            yield put(Actions.getTopTracksFailed('Could not get top tracks'))
        }
    
    }
    catch(error) {
        yield put(Actions.getTopTracksRequested(error))
    }

}

export default function* () {
    yield all([
        yield takeLatest(Actions.Actions.STORE_TOKEN, getProfile),
        yield takeLatest(Actions.Actions.GET_TOP_Requested, getTopArtists),
        yield takeLatest(Actions.Actions.setDatabaseUserRequested, setDatabaseUser)


    ]);
}
