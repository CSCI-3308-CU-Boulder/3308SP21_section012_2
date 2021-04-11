import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { playSongRequested } from '../redux/Actions/PlaybackActions.js'
import { connect } from 'react-redux'
<<<<<<< HEAD
import { Table, Card, CardImg, CardBody, CardTitle, CardHeader, CardSubtitle } from 'reactstrap'
=======
import { Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
    CardTitle, CardHeader, CardSubtitle } from 'reactstrap'
>>>>>>> 6272bbd3fc50c47168db3aef1c70f7b70af5425a
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

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
<<<<<<< HEAD
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
=======
                <thead>
                    <tr>
                    <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td colspan="1">
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardHeader>
                            <CardTitle tag="h5">Song Title 1</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 1 Artist</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 1 Album</CardSubtitle>
                            </CardBody>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardHeader>
                            <CardTitle tag="h5">Song Title 2</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 2 Artist</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 2 Album</CardSubtitle>
                            </CardBody>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardHeader>
                            <CardTitle tag="h5">Song Title 3</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 3 Artist</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 3 Album</CardSubtitle>
                            </CardBody>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardHeader>
                            <CardTitle tag="h5">Song Title 4</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 4 Artist</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 4 Album</CardSubtitle>
                            </CardBody>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardHeader>
                            <CardTitle tag="h5">Song Title 5</CardTitle>
                            </CardHeader>
                            <CardBody>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 5 Artist</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Song 5 Album</CardSubtitle>
                            </CardBody>
                        </Card>
                        </div>
                    </td>
                    </tr>
>>>>>>> 6272bbd3fc50c47168db3aef1c70f7b70af5425a
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
<<<<<<< HEAD
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
=======
                    <tr>
                    <th scope="row">1</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Artist Pic" />
                            <CardHeader>
                            <CardTitle tag="h5">Artist 1</CardTitle>
                            </CardHeader>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Artist Pic" />
                            <CardHeader>
                            <CardTitle tag="h5">Artist 2</CardTitle>
                            </CardHeader>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Artist Pic" />
                            <CardHeader>
                            <CardTitle tag="h5">Artist 3</CardTitle>
                            </CardHeader>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Artist Pic" />
                            <CardHeader>
                            <CardTitle tag="h5">Artist 4</CardTitle>
                            </CardHeader>
                        </Card>
                        </div>
                    </td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>
                        <div className={styles.table}>
                        <Card>
                            <CardImg top width="100%" src="" alt="Artist Pic" />
                            <CardHeader>
                            <CardTitle tag="h5">Artist 5</CardTitle>
                            </CardHeader>
                        </Card>
                        </div>
                    </td>
                    </tr>
>>>>>>> 6272bbd3fc50c47168db3aef1c70f7b70af5425a
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