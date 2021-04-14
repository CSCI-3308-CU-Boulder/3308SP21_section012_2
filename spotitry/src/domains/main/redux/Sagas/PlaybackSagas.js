import { all, takeLatest, call, put } from 'redux-saga/effects';
import * as Actions from '../Actions/PlaybackActions'
import axios from 'axios'
import { PLAYER_ENDPOINT } from '../../../../utils/constants'
import { saveTimestamp } from '../../../../firebase'

export function* getPlaybackInfo({ token, createTimestamp, userId}) {
    console.log(userId)
    try {
        const playbackInfo = yield call(axios.get, PLAYER_ENDPOINT,
            {
                headers: {
                'Authorization': 'Bearer ' + token
                }
            })
        const availableDevices = yield call(axios.get, `${PLAYER_ENDPOINT}/devices`,
            {
                headers: {
                'Authorization': 'Bearer ' + token
            }
            })
        if(availableDevices){
            const playback = playbackInfo.data
            const devices = availableDevices.data
            console.log(playbackInfo)
            console.log(availableDevices)
            yield put(Actions.getPlaybackInfoSucceeded(playback,devices))
            if(createTimestamp === 1){
                saveTimestamp(userId,playback.item,playback.progress_ms)
            }
        }
        else{
            yield put(Actions.getPlaybackInfoFailed('Unable to get data'))
        }
    }
    catch(error){
        console.log('error', error)
        yield put(Actions.getPlaybackInfoFailed(error))
    }
}

export function* playSong({token, position_ms, songURI, song}){
    try{
        // console.log(songURI)
        // if(songURI.includes('artist')){
        //     console.log('yeet')
        //     yield call(axios.put, `${PLAYER_ENDPOINT}/play`,{context_uri:songURI, position_ms: position_ms},{headers:{'Authorization': 'Bearer ' + token}})
        //     yield put(Actions.playSongSucceeded())
        //     yield put(Actions.setPlaybackInfo(song))
        // }
        // else{
            yield call(axios.put, `${PLAYER_ENDPOINT}/play`,{uris: [songURI], position_ms: position_ms},{headers:{'Authorization': 'Bearer ' + token}})
            yield put(Actions.playSongSucceeded())
            yield put(Actions.setPlaybackInfo(song))
        // }
    }
    catch(error){
        console.log(error)
    }
}

export function* getRecentlyPlayed({token}) {
    try {
        const response =  yield call(axios.get,`${PLAYER_ENDPOINT}/recently-played`,
            { headers: {'Authorization': 'Bearer ' + token }})
        if(response) {
            console.log(response)
            const recentlyPlayed = response.data.items
            console.log(recentlyPlayed)
            yield put(Actions.getRecentlyPlayedSucceeded(recentlyPlayed))
        }
        else {
            yield put(Actions.getRecentlyPlayedFailed('Could not get recently played'))
        }
    
    }
    catch(error) {
        yield put(Actions.getRecentlyPlayedFailed(error))
    }

}

export default function* () {
    yield all([
        yield takeLatest(Actions.playbackActions.getPlaybackInfoRequested, getPlaybackInfo),
        yield takeLatest(Actions.playbackActions.playSongRequested, playSong),
        yield takeLatest(Actions.playbackActions.getRecentlyPlayedRequested, getRecentlyPlayed)
    ]);
}
