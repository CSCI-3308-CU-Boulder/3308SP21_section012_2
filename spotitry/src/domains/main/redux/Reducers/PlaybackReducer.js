import { playbackActions } from '../Actions/PlaybackActions.js'


const InitialState = 
{
    playbackInfo:{
        item:null
    },
    availableDevices:{},
    loading:false,
    errors:[],
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
                errors
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
        default : {
            return{
                ...state
            }
        }
    }
}