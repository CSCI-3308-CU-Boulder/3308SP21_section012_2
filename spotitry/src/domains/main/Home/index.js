import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { playSongRequested } from '../redux/Actions/PlaybackActions.js'
import { connect } from 'react-redux'
import { Table, Card, CardImg, CardBody, CardTitle, CardHeader, CardSubtitle, Col, Row} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@material-ui/core'


const Home = (props) => {
    var {token, getTopArtists, getTopTracks, topTracks,topArtists,playSong} = props
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
                        <Col style={{height: '50%', display: 'flex', marginTop: "10px"}}
                            onClick={() => {
                                playSong(token,0,track?.uri,track);      
                            }}
                        >
                            <Card>
                                <CardImg top width="100%" src="" alt="Album Cover" style={{width:'210px'}} src={track.album.images[0].url}/>
                                <CardHeader>
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
                <Row style={{height: '500px', justifyContent: 'center'}}>
                {topArtists.slice(0,10)?.map((artist,key) => {
                    return(
                        <Col style={{height: '50%', display: 'flex', marginTop: '10px'}}>
                            <Card>
                                <CardImg top width="100%" alt="Artist Pic" style={{width:'200px', height: '200px'}} src={artist.images[0].url}/>
                                <CardHeader>
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