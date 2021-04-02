import React, {useState, Component } from 'react'
import styles from '../Timestamps/index.module.css'
import { connect } from 'react-redux'
import {Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Timestamps = (props) => {
    var {token} = props
    console.log(token)

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
            <div className={styles.container}>
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                <CardTitle tag="h5">Song/Podcast title 1</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                {/* <CardText>Artist Name</CardText>
                <CardText>Album Name</CardText> */}
                <CardText>Timestamps:</CardText>
                <Button>Timestamp #1</Button>
                </CardBody>
            </Card>
            </div>
            <div className={styles.container}>
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                <CardTitle tag="h5">Song/Podcast title 2</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                {/* <CardText>Artist Name</CardText>
                <CardText>Album Name</CardText> */}
                <CardText>Timestamps:</CardText>
                <Button>Timestamp #1</Button>
                </CardBody>
            </Card>
            </div>
            <div className={styles.container}>
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                <CardTitle tag="h5">Song/Podcast title 3</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                {/* <CardText>Artist Name</CardText>
                <CardText>Album Name</CardText> */}
                <CardText>Timestamps:</CardText>
                <Button>Timestamp #1</Button>
                </CardBody>
            </Card>
            </div>
            <div className={styles.container}>
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                <CardTitle tag="h5">Song/Podcast title 4</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                {/* <CardText>Artist Name</CardText>
                <CardText>Album Name</CardText> */}
                <CardText>Timestamps:</CardText>
                <Button>Timestamp #1</Button>
                </CardBody>
            </Card>
            </div>
            <div className={styles.container}>
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                <CardTitle tag="h5">Song/Podcast title 5</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                {/* <CardText>Artist Name</CardText>
                <CardText>Album Name</CardText> */}
                <CardText>Timestamps:</CardText>
                <Button>Timestamp #1</Button>
                </CardBody>
            </Card>
            </div>


        </div>



        </div>

    )
}

export default Timestamps;
