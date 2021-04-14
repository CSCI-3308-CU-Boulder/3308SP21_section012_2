export const playbackActions = {
    getPlaybackInfoRequested: 'Get Playback Info Requested',
    getPlaybackInfoSucceeded: 'Get Playback Info Succeeded',
    getPlaybackInfoFailed: 'Get Playback Info Failed',
    playSongRequested: 'Play Song Requested',
    playSongSucceeded: 'Play Song Succeeded',
    playSongFailed: 'Play Song Failed',
    setPlaybackInfo: 'Set Playback Info',
    getRecentlyPlayedRequested: 'Get Recently Played Requested',
    getRecentlyPlayedSucceeded: 'Get Recently Played Succeeded',
    getRecentlyPlayedFailed: 'Get Recently Played Failed',
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
export function playSongRequested(token,position_ms,songURI,song){
    return{
        type: playbackActions.playSongRequested,
        token,
        position_ms,
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
export function getRecentlyPlayedSucceeded(recentlyPlayed){
    return{
        type: playbackActions.getRecentlyPlayedSucceeded,
        recentlyPlayed
    }
}
export function getRecentlyPlayedFailed(errors){
    return{
        type: playbackActions.getRecentlyPlayedFailed,
        errors
    }
}
export function getRecentlyPlayedRequested(token){
    return{
        type: playbackActions.getRecentlyPlayedRequested,
        token
    }
}