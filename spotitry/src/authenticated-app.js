import React, { useEffect } from 'react';
import {hash} from './utils/constants'
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './domains/main/Home';
import NavBar from './components/NavBar';
import Timestamps from './domains/main/Timestamps';
import Account from './domains/main/Account';
import Discover from './domains/main/Discover';
import History from './domains/main/History';
import { StoreToken } from './domains/main/redux/Actions/UserActions.js'
import { connect } from 'react-redux'
import SpotifyPlayer from 'react-spotify-web-playback';

const AuthenticatedApp = (props) => {
  var {token, storeToken, selectedSong} = props
  const {position_ms, song, songURI} = selectedSong
  console.log(position_ms)
  useEffect(() => {
    if(!token){
      storeToken(hash.access_token)
    }
  },[])
    return(
      <>
      <NavBar/>
      {song && 
      <div
        style={{position:'fixed', width:'100%', zIndex:'100', bottom: '0px'}}
      >
        <SpotifyPlayer
            styles={{
              bgColor:'#282c34',
              color:'#1DB954',
              trackNameColor:'#1DB954',
              trackArtistColor:'white',
            }}
            token={token}
            uris={[songURI]}
            offset={position_ms}
            autoPlay={true}
            showSaveIcon={true}
            persistDeviceSelection={true}
        />

      </div>
      }
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home" />;
          }}
        />
        <Route
          exact path='/home'
        >
          <Home/>
        </Route>
        <Route
          exact path='/timestamps'
          >
          <Timestamps/>
        </Route>
        <Route
          exact path='/account'
        >
          <Account/>
        </Route>
        <Route
          exact path='/discover'
        >
          <Discover/>
        </Route>
        <Route
          exact path='/history'
        >
          <History/>
        </Route>
      </Switch>
    </>
    )
}
const mapDispatchToProps = (dispatch) => {
  return{
      storeToken: (token) => dispatch(StoreToken(token))
  }
}
const mapStateToProps = (state) => {
  return{
    token:state.User.token,
    selectedSong:state.Player.selectedSong
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthenticatedApp);