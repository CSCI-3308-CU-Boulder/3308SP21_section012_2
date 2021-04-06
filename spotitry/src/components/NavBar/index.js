import React, { useState } from 'react'
import styles from './index.module.css'
import {Tabs, Tab, Paper} from '@material-ui/core'
import { useHistory } from 'react-router-dom';


const NavBar = () => {
    const [tab,setTab] = useState(0);
    const history = useHistory()
    const tabs = ['home','friends','account','discover']
    return(
        <>
        <Paper>
            <Tabs
                className={styles.tabs}
                value={tab}
                onChange={(event,value)=>(
                    setTab(value),
                    history.push(tabs[value])
                )}
                indicatorColor='primary'
                centered
            >
                <Tab  label="Home" />
                <Tab label="Friends"/>
                <Tab label="Account"/>
                <Tab label="Discover"/>
            </Tabs>
        </Paper>
        </>
    )
}

export default NavBar;