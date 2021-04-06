import { UserDataActions } from '../Actions/UserActions.js'


const InitialState = 
{
    profile:{},
    databaseUser: {},
    topArtists: [],
    topTracks: [],
    searchedSongs: [],
    token: '',
    loading:false,
    errors:[],
}

export default function(state = InitialState, action){
    const {type} = action
    switch(type){
        case UserDataActions.STORE_TOKEN :{
            const {token} = action 
            return {
                ...state,
                token
            }
        }
        case UserDataActions.GET_PROFILE_Requested: {
            return {
                ...state,
                loading: true
            }
        }
        case UserDataActions.GET_PROFILE_Succeeded: {
            const {profile} = action
            return {
                ...state,
                loading:false,
                profile:profile
            }
        }
        case UserDataActions.GET_PROFILE_Failed: {
            const {errors} = action
            return {
                ...state,
                loading: false,
                errors
            }
        }
        case UserDataActions.GET_TOP_ARTISTS_Requested: {
            return {
                ...state,
                loading:true
            }
        }
        case UserDataActions.GET_TOP_ARTISTS_Succeeded: {
            const { topArtists } = action
            return {
                ...state,
                loading:false,
                topArtists:topArtists
            }
        }
        case UserDataActions.GET_TOP_ARTISTS_Failed: {
            const { errors } = action 
            return {
                ...state,
                loading:false,
                errors
            }
        }
        case UserDataActions.GET_TOP_TRACKS_Requested: {
            return {
                ...state,
                loading:true
            }
        }
        case UserDataActions.GET_TOP_TRACKS_Succeeded: {
            const {topTracks} = action
            return {
                ...state,
                loading:false,
                topTracks:topTracks
            }
        }
        case UserDataActions.GET_TOP_TRACKS_Failed: {
            const { errors } = action 
            return {
                ...state,
                loading:false,
                errors
            }
        }
        case UserDataActions.setDatabaseUserSucceeded: {
            const {user} = action
            return {
                ...state,
                databaseUser:user
            }
        }
        case UserDataActions.setDatabaseUserRequested: {
            return {
                ...state
            }
        }
        case UserDataActions.setDatabaseUserFailed: {
            const { errors } = action 
            return {
                ...state,
                errors
            }
        }
        case UserDataActions.searchSongsRequested: {
            return {
                ...state,
            }
        }
        case UserDataActions.searchSongsSucceeded: {
            const { searchedSongs } = action
            return {
                ...state,
                searchedSongs
            }
        }
        case UserDataActions.searchSongsFailed: {
            const { errors } = action 
            return {
                ...state,
                errors
            }
        }
        default:{
            return state;
        }
    }
}