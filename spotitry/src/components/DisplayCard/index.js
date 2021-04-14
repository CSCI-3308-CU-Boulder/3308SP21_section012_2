import React, { useState } from 'react'
import {Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, CardHeader} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';


const DisplayCard = (props) => {
    const {token, track, artistName,albumName, albumCover, trackName, playSong} = props;
    return(
        <Col style={{height: '50%', display: 'flex', marginTop: "10px"}}
            onClick={() => {
                playSong(token,0,track?.uri,track);      
            }}
        >
            <Card style={{cursor:'pointer', width: '210px', height: "500px"}}>
                <CardImg top width="100%" alt="Album Cover" style={{width:'210px'}} src={albumCover}/>
                <CardHeader>
                    <CardTitle tag="h5">{trackName}</CardTitle>
                </CardHeader>
                <CardBody>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{artistName}</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">{albumName}</CardSubtitle>
                </CardBody>
            </Card>
        </Col>
    )
}

export default DisplayCard;