export const playbackActions = {
    getPlaybackInfoRequested: 'Get Playback Info Requested',
    getPlaybackInfoSucceeded: 'Get Playback Info Succeeded',
    getPlaybackInfoFailed: 'Get Playback Info Failed',
    playSongRequested: 'Play Song Requested',
    playSongSucceeded: 'Play Song Succeeded',
    playSongFailed: 'Play Song Failed',
    setPlaybackInfo: 'Set Playback Info'
}

export function getPlaybackInfoRequested(token,createTimestamp,userId){
    return{
        type: playbackActions.getPlaybackInfoRequested,
        token,
        createTimestamp,
        userId
    }
}

export function getPlaybackInfoSucceeded(playbackInfo, availableDevices){
    return{
        type: playbackActions.getPlaybackInfoSucceeded,
        playbackInfo,
        availableDevices
    }
}
export function getPlaybackInfoFailed(errors){
    return{
        type: playbackActions.getPlaybackInfoFailed,
        errors
    }
}
export function playSongRequested(token,deviceId,songURI,song){
    return{
        type: playbackActions.playSongRequested,
        token,
        deviceId,
        songURI,
        song
    }
}
export function playSongSucceeded(token){
    return{
        type: playbackActions.playSongSucceeded,
    }
}
export function playSongFailed(errors){
    return{
        type: playbackActions.playSongFailed,
        errors
    }
}
export function setPlaybackInfo(song){
    return{
        type:playbackActions.setPlaybackInfo,
        song
    }
}