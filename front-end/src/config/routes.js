import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
//import DoggoContainer from '../containers/DoggoContainer/DoggoContainer';
import Register from '../components/auth/Register/register';
import Login from '../components/auth/Login/login';

// routes contains a lot of ternary statements
// these are largely designed to see if the user is logged in (via the App component's state, passed down as props)
// if the user is not logged in, it will redirect them to login
// if the user tries to go to /register or /login, but IS logged in, it will redirect them to /doggos
const Routes = (props) => {
  return (
    <Switch>
      <Route
        exact path='/'
        component={ Home }
      />
      <Route
        path='/register'
        render={
          () => props.user ? 
                  <Redirect to="/login" />
                :
                  <Register register={props.register} />
        }
      />
      <Route
        path='/login'
        render={
          () => props.user ?
                  <Redirect to="/" />
                :
                <Login login={props.login} />
        }
      />
    </Switch>
  )
}

export default Routes;