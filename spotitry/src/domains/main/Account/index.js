import React, { useState } from 'react'
import styles from './index.module.css'
import {Avatar, Paper} from '@material-ui/core'
import { connect } from 'react-redux'

const Account = (props) => {
    const { profile } = props
    console.log(profile)
    return(
        <Paper>
            <div className={styles.header}>
            <div className={styles.row}>
                <img className={styles.profilePic} src={profile?.images[0]?.url} ></img>
                <div>
                    <div className={styles.name} >{`${profile?.display_name}`}</div>
                    <div className={styles.email}>Email: {profile?.email}</div>
                    <div className={styles.followers}>Followers: {profile.followers.total}</div>
                </div>
            </div>
            </div>
        </Paper>

    )
}

const mapStateToProps = (state) => {
    return {
        profile: state?.User?.profile
    }
}

export default connect(mapStateToProps,null)(Account);