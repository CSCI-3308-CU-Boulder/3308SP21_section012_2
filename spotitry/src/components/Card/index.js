import React, { useState } from 'react'
import styles from './index.module.css'
import {Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Row, Col } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';


const Card = (props) => {
    const [token] = props;
    return(
        <div className={styles.container}>
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                    <CardTitle tag="h5">Song Title</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                </CardBody>
            </Card>
        </div>
    )
}

export default Card;