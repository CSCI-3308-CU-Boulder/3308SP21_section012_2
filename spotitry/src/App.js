import React, { useState } from "react";
import {hash} from './utils/constants'
import UnauthenticatedApp from './domains/login/unauthenticated-app'
import AuthenticatedApp from './authenticated-app'
import { StoreToken } from './domains/main/redux/actions'
import { connect } from 'react-redux'
import {useHistory } from "react-router-dom";

const App = (props) => {
  const [isLoggedIn] = useState(hash.access_token)
  const history = useHistory()
  var domain = window.location.pathname
  console.log(domain)

  if(isLoggedIn){
      props.storeToken(hash.access_token)
  }

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

const mapDispatchToProps = (dispatch) => {
  return{
      storeToken: (token) => dispatch(StoreToken(token))
  }
}
export default connect(null,mapDispatchToProps)(App);


