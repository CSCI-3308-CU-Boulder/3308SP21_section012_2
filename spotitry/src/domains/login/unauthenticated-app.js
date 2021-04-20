import styles from  './unauthenticated.module.css'
import React, { useEffect, useState} from "react";
import { spotifyLogo, clientId, redirectUri, hash, scopes, signUp, authEndpoint} from '../../utils/constants'
import {Tabs, Tab, Button, Box} from '@material-ui/core'

const UnauthenticatedApp = () => {
    const [accessToken, setAccessToken] = useState()
    useEffect(() => {
      let _token = hash.access_token;
      if (_token) {
        // Set token
        setAccessToken({
          token: _token
        });
      }
    },[hash.access_token])
    const redirectUri = `${window.location.href}home`
    console.log(redirectUri)
    return (
      <div className={styles.App}>
            <Tabs
              className={styles.header}
              value={false}
              centered
            >
              <Tab style={{fontSize: '36px'}}label="Spotitry" />
            </Tabs>
        <header className={styles.AppHeader}>
        
        <img src={spotifyLogo} className={styles.AppLogo} alt="Spotify Logo" />
        <br></br>
        <Box display="flex" justifyContent="space-between">
          {!accessToken && (
            <Button style={{height: '50px', width: '100px', margin: "20px"}} className={styles.dumb} variant="contained" href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
              Login
            </Button>
          )}
          {!accessToken && (
            <Button style={{height: '50px', width: '100px', margin: "20px"}} variant="contained" href={`${signUp}`}>
              Sign Up
            </Button>
          )}
        </Box>
        </header>
      </div>
    );
  }
  
  export default UnauthenticatedApp;