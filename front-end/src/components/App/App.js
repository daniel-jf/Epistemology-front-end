import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Routes from '../../config/routes';
import UserAPI from '../../api/UserAPI';
import Header from '../../layout/Header';
import Landing from '../Home/Home';
import './App.css';

class App extends React.Component {
  // initial state for first render
  // pulls from local storage, if it's there; if not then it's null, so it will return false for any checks further down the component tree
  state = {
    user: '',
    id: ''
  }

  componentDidMount() {
    // if there's a token in local storage
    if (localStorage.jwtToken) {
      // set the auth header to the token
      setAuthHeader(localStorage.jwtToken);
      // decode the token
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      // set the state to the decoded token properties
      this.setState({
        user: decoded.email,
        id: decoded._id
      })
    }
  }

  register = (user) => {
    UserAPI.register(user)
      .then(res => {
        if (res.status === 200) {
          // get the token from the response
          const token = res.data.token;
          // set the token to local storage
          localStorage.setItem('jwtToken', token);
          // set the auth header to the token
          setAuthHeader(token);
          // decode the token
          const decoded = jwt_decode(token);
          // set the state to the decoded user information
          this.setState({
            user: decoded.email,
            id: decoded._id
          })
        }
      })
      .catch(err => console.log(err));
  }

  login = (user) => {
    UserAPI.login(user)
    .then(res => {
      if (res.status === 200) {
        // get the token from the response
        const token = res.data.token;
        // set the token to local storage
        localStorage.setItem('jwtToken', token);
        // set the auth header to the token
        setAuthHeader(token);
        // decode the token
        const decoded = jwt_decode(token);
        // set the state to the decoded user information
        this.setState({
          user: decoded.email,
          id: decoded._id
        })
      }
    })
    .catch(err => console.log(err));
  }

  logout = () => {
    // delete the token from localStorage
    localStorage.removeItem('jwtToken');
    // remove the header from being sent in requests
    // passing it no value will make its logic falsy, which will remove the header
    setAuthHeader();
    // remove the user info from state so the re-render will log them out and change the HTML header automatically
    this.setState({
      user: '',
      id: ''
    })
  }

  // passes the user to its child components, so they can act upon whether or not the user is logged in
  // also sends the logout method to header, since it will need it
  // sends login/register to routes, because routes is showing the register/login components based on user interaction
  render() {
    return (
      <div id="app">
        <Header
          logout={this.logout}
          user={this.state.user}
        />
         <Routes 
          user={this.state.user}
          login={this.login}
          register={this.register}
        />
        <Landing />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;