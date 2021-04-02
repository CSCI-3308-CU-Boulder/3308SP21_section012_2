export const Actions  = {
    STORE_TOKEN:'Store Token',
    GET_PROFILE_Succeeded:'Get Profile Succeeded',
    GET_PROFILE_Requested:'Get Profile Requested',
    GET_PROFILE_Failed:'Get Profile Failed',
    GET_TOP_Requested:'Get Top Artists Requested',
    GET_TOP_Succeeded:'Get Top Artists Succeeded',
    GET_TOP_Failed:'Get Top Artists Failed',
    setDatabaseUserRequested: 'Set Database User Requested',
    setDatabaseUserSucceeded: 'Set Database User Succeeded'
}

export function StoreToken(token){
    return{
        type: Actions.STORE_TOKEN,
        token
    }
}
export function getProfileRequested(token){
    return{
        type: Actions.GET_PROFILE_Requested
    }
}

export function getProfileSucceeded(profile){
    return{
        type: Actions.GET_PROFILE_Succeeded,
        profile
    }
}
export function getProfileFailed(errors){
    return{
        type: Actions.GET_PROFILE_Failed,
        errors
    }
}
export function getTopArtistsRequested(token){
    return{
        type: Actions.GET_TOP_Requested,
        token
    }
}

export function getTopArtistsSucceeded(topArtists){
    return{
        type: Actions.GET_TOP_Succeeded,
        topArtists
    }
}

export function getTopArtistsFailed(errors){
    return{
        type: Actions.GET_TOP_Failed,
        errors
    }
}

export function getTopTracksRequested(token){
    return{
        type: Actions.GET_TOP_Requested,
    }
}

export function getTopTracksSucceeded(topTracks){
    return{
        type: Actions.GET_TOP_Succeeded,
        topTracks
    }
}

export function getTopTracksFailed(errors){
    return{
        type: Actions.GET_TOP_Failed,
        errors
    }
}
export function setDatabaseUserSucceeded(user){
    return{
        type: Actions.setDatabaseUserSucceeded,
        user
    }
}
export function setDatabaseUserRequested(data){
    return{
        type:Actions.setDatabaseUserRequested,
        data
    }
}