import React, { useState } from 'react'
import styles from './index.module.css'
import { useHistory } from 'react-router-dom';
import { hash } from '../utils/constants'
import App from '../App.js'

const authenticatedApp = () => {
    return(
        <div className={styles.header}>You have been authenticated</div>
    )
}

export default authenticatedApp;