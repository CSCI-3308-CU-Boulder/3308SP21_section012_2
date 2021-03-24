import React, {useState, Component } from 'react'
import styles from '../Timestamps/index.module.css'
import { connect } from 'react-redux'
import { Table } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const Timestamps = () => {
    const {token} = props
    console.log(token)

    return(
        <div className={styles.header}> Timestamps

            <Table dark>

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

            </Table>

        </div>

    )
}

export default Timestamps;
