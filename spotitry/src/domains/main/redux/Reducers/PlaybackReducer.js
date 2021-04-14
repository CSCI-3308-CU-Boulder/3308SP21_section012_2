import { playbackActions } from '../Actions/PlaybackActions.js'


const InitialState = 
{
    playbackInfo:{
        item:null
    },
    availableDevices:{},
    recentlyPlayed: [],
    loading:false,
    errors:{},
}

export default function(state = InitialState, action){
    const {type} = action
    switch(type){
        case playbackActions.getPlaybackInfoRequested :{
            return {
                ...state,
            }
        }
        case playbackActions.getPlaybackInfoSucceeded: {
            const { playbackInfo, availableDevices} = action
            return {
                ...state,
                playbackInfo:playbackInfo,
                availableDevices:availableDevices
            }
        }
        case playbackActions.getPlaybackInfoFailed: {
            const { errors } = action
            return {
                ...state,
                loading:false,
                errors:errors
            }
        }
        case playbackActions.setPlaybackInfo: {
            const { song } = action
            return{
                ...state,
                playbackInfo:{
                    ...state.playbackInfo,
                    item:song,
                }
            }
        }
        case playbackActions.getRecentlyPlayedSucceeded: {
            const {recentlyPlayed} = action
            return{
                ...state,
                recentlyPlayed:recentlyPlayed
            }
        }
        case playbackActions.getRecentlyPlayedFailed: {
            const {errors} = action
            return{
                ...state,
                errors:errors
            }
        }
        default : {
            return{
                ...state
            }
        }
    }
}