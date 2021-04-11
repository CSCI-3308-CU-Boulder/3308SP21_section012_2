import React, {useState, Component, useEffect } from 'react'
import styles from '../Timestamps/index.module.css'
import { connect } from 'react-redux'
<<<<<<< HEAD
import { getProfileRequested } from '../redux/Actions/UserActions'
import { playSongRequested } from '../redux/Actions/PlaybackActions'
=======
<<<<<<< HEAD
import { getProfileRequested } from '../redux/Actions/UserActions'
import { playSongRequested } from '../redux/Actions/PlaybackActions'
=======
>>>>>>> 6272bbd3fc50c47168db3aef1c70f7b70af5425a
>>>>>>> KyraBranch
import {Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Timestamps = (props) => {
    const {token, timestamps, refetchUser,playSong} = props
    console.log(token)

    // useEffect(() => {
    //     refetchUser(token)
    // },[])
    // var arrTimestamps = Object.values(timestamps)
    // console.log(arrTimestamps)
    
    return(
    
        <div className={styles.container}>     
            <div>
                <InputGroup style={{width: '50%'}}>
                    <InputGroupAddon addonType="append">
                        <Button>
                            <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                        </Button>
                    </InputGroupAddon>
                    <Input placeholder = "Search"></Input>
                </InputGroup>
            </div>
            <div>
                {/* {imestamps?.map((timestamp) => { */}
                    {/* console.log(timestamp) */}
                    {/* return ( */}
                        <div className={styles.container}>
                            <Card>
                                <CardImg top width="100%" src="" alt="Album Cover" />
                                <CardBody>
                                    <CardTitle tag="h5">{}</CardTitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                                    <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                                    <CardText>Timestamps:</CardText>
                                    <Button>Timestamp #1</Button>
                                </CardBody>
                            </Card>
                        </div>

                    {/* ) */}
                {/* }) */}

                {/* } */}
            <br></br>

            {/* <div>
                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardBody>
                            <CardTitle tag="h5">Song/Podcast title 1</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                            <CardText>Timestamps:</CardText>
                            <Button>Timestamp #1</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardBody>
                            <CardTitle tag="h5">Song/Podcast title 2</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
 
                            <CardText>Timestamps:</CardText>
                            <Button>Timestamp #1</Button>
                            </CardBody>
                        </Card>
                    </Col>
        
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardBody>
                            <CardTitle tag="h5">Song/Podcast title 3</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>

                            <CardText>Timestamps:</CardText>
                            <Button>Timestamp #1</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                
                <br></br>

                <Row>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardBody>
                            <CardTitle tag="h5">Song/Podcast title 4</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                            <CardText>Timestamps:</CardText>
                            <Button>Timestamp #1</Button>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardBody>
                            <CardTitle tag="h5">Song/Podcast title 5</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                            <CardText>Timestamps:</CardText>
                            <Button>Timestamp #1</Button>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col sm="4">
                        <Card>
                            <CardImg top width="100%" src="" alt="Album Cover" />
                            <CardBody>
                            <CardTitle tag="h5">Song/Podcast title 6</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                            <CardText>Timestamps:</CardText>
                            <Button>Timestamp #1</Button>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div> */}
        </div>
    </div>

    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        // getTopArtists: (token) => dispatch(getTopArtistsRequested(token)),
        // getTopTracks: (token) => dispatch(getTopTracksRequested)
        playSong: (token, deviceId, songURI, song) => dispatch(playSongRequested(token, deviceId, songURI,song)),
        refetchUser: (token) => dispatch(getProfileRequested(token))
    }
}
const mapStateToProps = (state) => {
    return {
        timestamps:state.User.databaseUser.timestamps,
        token:state.User.token,

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Timestamps);
