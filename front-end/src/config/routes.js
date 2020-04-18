import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/auth/Register/register';
import Login from '../components/auth/Login/login';
import Profile from '../components/Profile/Profile';
import Learn from '../components/Learn/Learn';
import LessonsPage from '../components/LessonsPage/Lessons';
import RWStyle from '../components/LessonsPage/RWStyle';

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
                  <Redirect to="/learn" />
                :
                <Login login={props.login} />
        }
      />
      <Route
        exact path='/profile'
        component={ Profile } 
      />
      <Route
        exact path='/learn'
        component={ Learn }
      />
      <Route
        exact path='/lessons'
        component={ LessonsPage }
      />
      <Route
        exact path='/RW'
        component={ RWStyle }
      />
    </Switch>
  )
}

export default Routes;