import React, { useEffect, useState } from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom';
import { hash } from '../utils/constants'
import App from  '../App'
import  {StoreToken}  from './actions';
import {connect} from 'react-redux'

const Home = (props) => {
    const history = useHistory()
    if(!hash.access_token){
        history.push('/')
    }
    console.log(hash)
    if(hash.access_token){
        props.storeToken(hash.access_token)
    }
    return(
        <div className={styles.header}>You have been authenticated</div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        storeToken: (token) => dispatch(StoreToken(token))
    }
}
export default connect(null,mapDispatchToProps)(Home);