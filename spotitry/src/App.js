import logo from './images/logo.svg';
import styles from  './App.module.css';
import React, { Component, useEffect, useState } from "react";
import { spotifyLogo, clientId, redirectUri, hash, scopes, signUp, authEndpoint} from './utils/constants'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';

// this shit isnt working and I dont know why.  it can't find what it needs

// {!hash.access_token &&
//     history.push('/')
//     return (
//         <>
//         {/* <p>Oops. Something went wrong. Please try again</p> */}
//         <App errors={errors}/>
//         </>
//     )
// }







const App = () => {
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
  return (
    <div className={styles.App}>
      <header className={styles.AppName}>SpotiTRY</header>
      <header className={styles.AppHeader}>
      <img src={spotifyLogo} className={styles.AppLogo} alt="Spotify Logo" />
      {!accessToken && (
        <a
          className={styles.AppLink}
          href={`${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}>
          Login
        </a>
        
      )}
      {!accessToken && (
        <a
          className={styles.AppLink}
          href={`${signUp}`}
        >
          Sign Up
        </a>
      )}
      </header>
    </div>
  );
}

export default App;

