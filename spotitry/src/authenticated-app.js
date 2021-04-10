import React, { useEffect } from 'react';
import {hash} from './utils/constants'
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './domains/main/Home';
import NavBar from './components/NavBar';
import Timestamps from './domains/main/Timestamps';
import Account from './domains/main/Account';
import Discover from './domains/main/Discover'
import { StoreToken } from './domains/main/redux/Actions/UserActions.js'
import { connect } from 'react-redux'

const AuthenticatedApp = (props) => {
  var {token, storeToken} = props
  useEffect(() => {
    if(!token){
      storeToken(hash.access_token)
    }
  },[])
    return(
      <>
      <NavBar/>
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
    token:state.User.token
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(AuthenticatedApp);