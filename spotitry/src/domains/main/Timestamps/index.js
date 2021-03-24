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

            </Table>

        </div>

    )
}

export default Timestamps;