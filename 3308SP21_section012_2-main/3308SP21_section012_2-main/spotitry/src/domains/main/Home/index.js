import React, { useEffect, useState, Component } from 'react'
import styles from './index.module.css'
import { getTopArtistsRequested, getTopTracksRequested } from '../redux/actions'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


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
                    <th>Title</th>
                    <th>Artist</th>
                    <th>Album</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Song 1 Title</td>
                    <td>Song 1 Artist</td>
                    <td>Song 1 Album</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Song 2 Title</td>
                    <td>Song 2 Artist</td>
                    <td>Song 2 Album</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Song 3 Title</td>
                    <td>Song 3 Artist</td>
                    <td>Song 3 Album</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Song 4 Title</td>
                    <td>Song 4 Artist</td>
                    <td>Song 4 Album</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Song 5 Title</td>
                    <td>Song 5 Artist</td>
                    <td>Song 5 Album</td>
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
                    <td>Artist 1</td>
                    </tr>
                    <tr>
                    <th scope="row">2</th>
                    <td>Artist 2</td>
                    </tr>
                    <tr>
                    <th scope="row">3</th>
                    <td>Artist 3</td>
                    </tr>
                    <tr>
                    <th scope="row">4</th>
                    <td>Artist 4</td>
                    </tr>
                    <tr>
                    <th scope="row">5</th>
                    <td>Artist 5</td>
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