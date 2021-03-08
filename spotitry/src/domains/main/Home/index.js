import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { getTopArtistsRequested, getTopTracksRequested } from '../redux/actions'
import { connect } from 'react-redux'

const Home = (props) => {
    const {token, getTopArtists, getTopTracks} = props
    console.log(token)
    useEffect(() => {
        getTopArtists(token)
        console.log(token)
    },[])
    return(
            <div className={styles.header}>This is Home Page</div>
        
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTopArtists: (token) => dispatch(getTopArtistsRequested(token)),
        getTopTracks: (token) => dispatch(getTopTracksRequested)
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);