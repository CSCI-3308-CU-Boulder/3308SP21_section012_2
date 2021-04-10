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

export function* playSong({token, deviceId, songURI, song, action}){

    try{
        yield call(axios.put, `${PLAYER_ENDPOINT}/play`,{uris: [songURI], position_ms:''},{headers:{'Authorization': 'Bearer ' + token}})
        yield put(Actions.playSongSucceeded())
        yield put(Actions.setPlaybackInfo(song))
    }
    catch(error){
        console.log(error)
    }
}

export default function* () {
    yield all([
        yield takeLatest(Actions.playbackActions.getPlaybackInfoRequested, getPlaybackInfo),
        yield takeLatest(Actions.playbackActions.playSongRequested, playSong),
    ]);
}
