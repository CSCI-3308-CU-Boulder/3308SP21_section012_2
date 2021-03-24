import React, { useEffect } from 'react';
import {hash} from './utils/constants'
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './domains/main/Home';
import NavBar from './domains/main/Navigation';
import Friends from './domains/main/Friends';
import Account from './domains/main/Account';
import { StoreToken } from './domains/main/redux/actions'
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