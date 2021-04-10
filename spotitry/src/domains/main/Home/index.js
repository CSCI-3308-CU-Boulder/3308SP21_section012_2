import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { playSongRequested } from '../redux/Actions/PlaybackActions.js'
import { connect } from 'react-redux'
import { Table, Card, CardImg, CardBody, CardTitle, CardHeader, CardSubtitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


const Home = (props) => {
    var {token, getTopArtists, getTopTracks, topTracks,topArtists,playSong} = props

    console.log(token)
    useEffect(() => {
        // getTopArtists(token)
        // console.log(token)
    },[])
    console.log(topTracks)
    return(
        // <>
        // <div className={styles.header}>This is Home Page</div>
        // </>

        <div className={styles.container}>
            <div class="card d-flex justify-content-center">
                <div class="card-body">
                    <h4 class="card-title">Username's Top Songs</h4>
                </div>
            </div>
            <Table dark>
            <thead><tr><th>#</th></tr></thead>
                <tbody>
                {topTracks.slice(0,10)?.map((track,key) => {
                    return(
                        <tr>
                            <th scope="row">{key+1}</th>
                            <td colSpan="1">
                                <div 
                                    className={styles.table}                                        
                                    onClick={() => {
                                        playSong(token,0,track?.uri,track,'play');      
                                    }}
                                >
                                    <Card >
                                        <CardImg top width="100%" src="" alt="Album Cover" style={{width:'200px',}} src={track.album.images[0].url}/>
                                        <CardHeader>
                                            <CardTitle tag="h5">{track.name}</CardTitle>
                                        </CardHeader>
                                        <CardBody>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{track.artists[0].name}</CardSubtitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">{track.album.name}</CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </div>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
            <div class="card d-flex ">
                <div class="card-body">
                    <h4 class="card-title">Username's Top Artists</h4>
                </div>
            </div>
            <Table dark>
            <thead><tr><th>#</th><th>Artist</th></tr></thead>
                <tbody>
                {topArtists.slice(0,10)?.map((artist,key) => {
                    return(
                        <tr>
                            <th scope="row">{key+1}</th>
                            <td>
                                <div className={styles.table}>
                                <Card>
                                    <CardImg top width="100%" alt="Artist Pic" style={{width:'200px'}} src={artist.images[0].url}/>
                                    <CardHeader>
                                        <CardTitle tag="h5">{artist.name}</CardTitle>
                                    </CardHeader>
                                </Card>
                                </div>
                            </td>
                        </tr> 
                    )
                })}             
                </tbody>
            </Table>
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getTopArtists: (token) => dispatch(getTopArtistsRequested(token)),
        // getTopTracks: (token) => dispatch(getTopTracksRequested)
        playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song))
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token,
        topTracks:state.User.topTracks,
        topArtists: state.User.topArtists,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);