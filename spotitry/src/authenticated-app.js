import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';
import Home from './domains/main/Home';
import NavBar from './domains/main/Navigation';
import Friends from './domains/main/Friends';
import Account from './domains/main/Account';

const AuthenticatedApp = () => {

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
          exact path='/friends'
          >
          <Friends/>
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

export default AuthenticatedApp;