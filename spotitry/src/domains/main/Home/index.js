import React, { useEffect, useState, Component } from 'react'
import styles from './index.module.css'
import { getTopArtistsRequested, getTopTracksRequested } from '../redux/actions'
import { connect } from 'react-redux'
import { Table, InputGroup, InputGroupAddon, InputGroupText, Input, Card, CardImg, CardText, CardBody,
    CardTitle, CardHeader, CardSubtitle } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    var {token, getTopArtists, getTopTracks} = props

    console.log(token)
    useEffect(() => {
        getTopArtists(token)
        console.log(token)
    },[])
    return(

        <div className={styles.container}>
            <div class="card d-flex justify-content-center">
                <div class="card-body">
                    <h4 class="card-title">Username's Top Songs</h4>
                </div>
            </div>

            <Table dark>
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
                </tbody>
            </Table>
            <div class="card d-flex justify-content-center">
                <div class="card-body">
                    <h4 class="card-title">Username's Top Artists</h4>
                </div>
            </div>
            <Table dark>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>Artist</th>
                    </tr>
                </thead>
                <tbody>
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
                </tbody>
            </Table>
        </div>
        
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTopArtists: (token) => dispatch(getTopArtistsRequested(token)),
        getTopTracks: (token) => dispatch(getTopTracksRequested)
    }
}
const mapStateToProps = (state) => {
    return {
        token:state.User.token,
        // topArtists: state.User.
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Home);