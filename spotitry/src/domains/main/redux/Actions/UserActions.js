export const UserDataActions = {
    STORE_TOKEN:'Store Token',
    GET_PROFILE_Succeeded:'Get Profile Succeeded',
    GET_PROFILE_Requested:'Get Profile Requested',
    GET_PROFILE_Failed:'Get Profile Failed',
    GET_TOP_ARTISTS_Requested:'Get Top Artists Requested',
    GET_TOP_ARTISTS_Succeeded:'Get Top Artists Succeeded',
    GET_TOP_ARTISTS_Failed:'Get Top Artists Failed',
    GET_TOP_TRACKS_Requested:'Get Top Tracks Requested',
    GET_TOP_TRACKS_Succeeded:'Get Top Tracks Succeeded',
    GET_TOP_TRACKS_Failed:'Get Top Tracks Failed',
    setDatabaseUserRequested: 'Set Database User Requested',
    setDatabaseUserSucceeded: 'Set Database User Succeeded',
    setDatabaseUserFailed: 'Set Database User Failed',
    searchSongsRequested: 'Search Songs Requested',
    searchSongsSucceeded: 'Search Songs Succeeded',
    searchSongsFailed: 'Search Songs Failed',
}

export function StoreToken(token){
    return{
        type: UserDataActions.STORE_TOKEN,
        token
    }
}
export function getProfileRequested(token){
    return{
        type: UserDataActions.GET_PROFILE_Requested,
        token
    }
}

export function getProfileSucceeded(profile){
    return{
        type: UserDataActions.GET_PROFILE_Succeeded,
        profile
    }
}
export function getProfileFailed(errors){
    return{
        type: UserDataActions.GET_PROFILE_Failed,
        errors
    }
}
export function getTopArtistsRequested(token){
    return{
        type: UserDataActions.GET_TOP_ARTISTS_Requested,
        token
    }
}

export function getTopArtistsSucceeded(topArtists){
    return{
        type: UserDataActions.GET_TOP_ARTISTS_Succeeded,
        topArtists
    }
}

export function getTopArtistsFailed(errors){
    return{
        type: UserDataActions.GET_TOP_ARTISTS_Failed,
        errors
    }
}

export function getTopTracksRequested(token){
    return{
        type: UserDataActions.GET_TOP_TRACKS_Requested,
        token
    }
}

export function getTopTracksSucceeded(topTracks){
    return{
        type: UserDataActions.GET_TOP_TRACKS_Succeeded,
        topTracks
    }
}

export function getTopTracksFailed(errors){
    return{
        type: UserDataActions.GET_TOP_TRACKS_Failed,
        errors
    }
}
export function setDatabaseUserSucceeded(user){
    return{
        type: UserDataActions.setDatabaseUserSucceeded,
        user
    }
}
export function setDatabaseUserRequested(data){
    return{
        type:UserDataActions.setDatabaseUserRequested,
        data
    }
}
export function setDatabaseUserFailed(data){
    return{
        type:UserDataActions.setDatabaseUserFailed,
        data
    }
}
export function searchSongsRequested(token,searchValue){
    return {
        type: UserDataActions.searchSongsRequested,
        searchValue,
        token
    }
}
export function searchSongsSucceeded(searchedSongs){
    return {
        type: UserDataActions.searchSongsSucceeded,
        searchedSongs
    }
}
export function searchSongsFailed(errors){
    return {
        type: UserDataActions.searchSongsFailed,
        errors
    }
}