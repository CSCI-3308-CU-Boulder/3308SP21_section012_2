import React, { useState } from "react";
import {hash} from './utils/constants'
import UnauthenticatedApp from './domains/login/unauthenticated-app'
import AuthenticatedApp from './authenticated-app'
import { StoreToken } from './domains/main/redux/Actions/UserActions.js'
import { connect } from 'react-redux'
import {useHistory } from "react-router-dom";

const App = (props) => {
  const [isLoggedIn] = useState(hash.access_token)
  const history = useHistory()
  var domain = window.location.pathname
  if(isLoggedIn){
    return(
      <AuthenticatedApp/>
    )
  }
  if(domain != '/'){
    history.push('/') 
  }
  return <UnauthenticatedApp/>
}
export default (App);


