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
            <Card>
                <CardImg top width="100%" src="" alt="Album Cover" />
                <CardBody>
                <CardTitle tag="h5">Song/Podcast title</CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Artist Name</CardSubtitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">Album Name</CardSubtitle>
                {/* <CardText>Artist Name</CardText>
                <CardText>Album Name</CardText> */}
                <CardText>Timestamps:</CardText>
                <Button>Timestamp #1</Button>
                </CardBody>
            </Card>
            </div>

            {/* <Table dark>

            <thead>
                <tr>
                <th>#</th>
                <th>Title</th>
                <th>Artist</th>
                <th>Album</th>
                <th>Timestamp(s)</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <th scope="row">1</th>
                <td>Song 1 Title</td>
                <td>Song 1 Artist</td>
                <td>Song 1 Album</td>
                <td>[[Saved Timestamps]] </td>
                </tr>
                <tr>
                <th scope="row">2</th>
                <td>Song 2 Title</td>
                <td>Song 2 Artist</td>
                <td>Song 2 Album</td>
                <td>[[Saved Timestamps]] </td>
                </tr>
                <tr>
                <th scope="row">3</th>
                <td>Song 3 Title</td>
                <td>Song 3 Artist</td>
                <td>Song 3 Album</td>
                <td>[[Saved Timestamps]] </td>
                </tr>
                <tr>
                <th scope="row">4</th>
                <td>Song 4 Title</td>
                <td>Song 4 Artist</td>
                <td>Song 4 Album</td>
                <td>[[Saved Timestamps]] </td>
                </tr>
                <tr>
                <th scope="row">5</th>
                <td>Song 5 Title</td>
                <td>Song 5 Artist</td>
                <td>Song 5 Album</td>
                <td>[[Saved Timestamps]] </td>
                </tr>
            </tbody>

            </Table> */}

        </div>

    )
}

export default Timestamps;
