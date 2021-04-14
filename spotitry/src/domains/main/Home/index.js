import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { playSongRequested , setSelectedSong} from '../redux/Actions/PlaybackActions.js'
import { connect } from 'react-redux'
import { Table, Card, CardImg, CardBody, CardTitle, CardHeader, CardSubtitle, Col, Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@material-ui/core'


const Home = (props) => {
    var {token,topTracks,topArtists,setSelectedSong, selectedSong} = props
    console.log(topTracks)
    return(

        <div className={styles.container}>
            <div class="card d-flex justify-content-center">
                <div class="card-body">
                    <h4 class="card-title">Your Top Songs</h4>
                </div>
            </div>
            <div>
                <Row style={{height: '800px', marginBottom: "20px"}}>
                {topTracks.slice(0,10)?.map((track,key) => {
                    return(
                        <Col style={{height: '50%', display: 'flex', marginTop: "10px", }}
                            onClick={() => {
                                selectedSong?.song?.album?.uri == track.album.uri ?
                                setSelectedSong(0,track.uri,track)
                                :
                                setSelectedSong(track.track_number-1,track.album?.uri,track);        
                            }}
                        >
                            <Card style={{cursor:'pointer', width: '210px'}}>
                                <CardImg top width="100%" src="" alt="Album Cover" style={{width:'210px'}} src={track.album.images[0].url}/>
                                <CardHeader style={{}}>
                                    <CardTitle tag="h5">{key+1}.  {track.name}</CardTitle>
                                </CardHeader>
                                <CardBody>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{track.artists[0].name}</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">{track.album.name}</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    )
                })}
                </Row>
            </div>
            <div class="card d-flex" style={{marginTop: '10px'}}>
                <div class="card-body">
                    <h4 class="card-title">Your Top Artists</h4>
                </div>
            </div>
            <div>
                <Row style={{height:'550px', marginBottom: '20px'}}>
                {topArtists.slice(0,10)?.map((artist,key) => {
                    return(
                        <Col style={{height: '50%', display: 'flex', marginTop:'10px'}}>
                            <Card style={{cursor: 'pointer', width:'210px'}}>
                                <CardImg alt="Artist Pic" style={{width:'210px', height: '210px'}} src={artist.images[0].url}/>
                                <CardHeader style={{height:'100px'}}>
                                    <CardTitle tag="h5">{key+1}.  {artist.name}</CardTitle>
                                </CardHeader>
                            </Card>
                        </Col>
                    )
                })}  
                </Row>           
            </div>
        </div>
        
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song)),
        setSelectedSong: (token, songURI, song) => dispatch(setSelectedSong(token, songURI, song))
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token,
        topTracks:state.User.topTracks,
        topArtists: state.User.topArtists,
        selectedSong: state.Player.selectedSong

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);