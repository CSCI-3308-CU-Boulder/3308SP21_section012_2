import { Actions } from './actions'


const InitialState = 
{
    loading:false,
    profile:{},
    token: '',
    errors:[]
}

export default function(state = InitialState, action){
    const {type} = action
    switch(type){
        case Actions.STORE_TOKEN :{
            const {token} = action 
            return {
                ...state,
                token
            }
        }
        case Actions.GET_PROFILE_Requested: {
            return {
                ...state,
                loading: true
            }
        }
        case Actions.GET_PROFILE_Succeeded: {
            const {profile} = action
            return {
                ...state,
                loading:false,
                profile:profile
            }
        }
        case Actions.GET_PROFILE_Failed: {
            const {errors} = action
            return {
                ...state,
                loading: false,
                errors
            }
        }
        case Actions.GET_TOP_ARTISTS_Requested: {
            return {
                ...state,
                loading:true
            }
        }
        case Actions.GET_TOP_ARTISTS_Succeeded: {
            const {topArtists} = action
            return {
                ...state,
                loading:false,
                topArtists
            }
        }
        case Actions.GET_TOP_ARTISTS_Failed: {
            const { errors } = action 
            return {
                ...state,
                loading:false,
                errors
            }
        }
        case Actions.GET_TOP_TRACKS_Requested: {
            return {
                ...state,
                loading:true
            }
        }
        case Actions.GET_TOP_TRACKS_Succeeded: {
            const {topTracks} = action
            return {
                ...state,
                loading:false,
                topTracks
            }
        }
        case Actions.GET_TOP_TRACKS_Failed: {
            const { errors } = action 
            return {
                ...state,
                loading:false,
                errors
            }
        }
        default:{
            return state;
        }
    }
}