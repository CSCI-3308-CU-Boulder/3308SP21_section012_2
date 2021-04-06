import React, {useState, Component, useEffect } from 'react'
import styles from '../Timestamps/index.module.css'
import { connect } from 'react-redux'
import { getProfileRequested } from '../redux/Actions/UserActions'
import { playSongRequested } from '../redux/Actions/PlaybackActions'
import {Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
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
            
        <div>
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
