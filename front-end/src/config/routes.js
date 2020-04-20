import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/auth/Register/register';
import Login from '../components/auth/Login/login';
import Profile from '../components/Profile/Profile';
import Learn from '../components/Learn/Learn';
import LessonsPage from '../components/LessonsPage/Lessons';
import UpdateProfileForm from '../components/Profile/UpdateProfile';
import DeleteProfileForm from '../components/Profile/DeleteProfileForm';

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
          () => props.user.user ? 
                  <Redirect to="/login" />
                :
                  <Register register={props.register} />
        }
      />
      <Route
        path='/login'
        render={
          () => props.user.user ?
                  <Redirect to="/learn" />
                :
                <Login login={props.login} />
        }
      />
      <Route
        path='/profile'
        render={
          () => props.user.id ? 
          <Profile user={ props.user }/> : ""} 
      />
      <Route
        exact path='/learn'
        component={ Learn }
      />
      <Route
        exact path='/lessons'
        component={ LessonsPage }
      />
      <Route path='/editprofileform' component={ UpdateProfileForm } />
      <Route path='/deleteprofileform' component={ DeleteProfileForm } />
    </Switch>
  )
}

export default Routes;