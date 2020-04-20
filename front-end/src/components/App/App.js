import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Routes from '../../config/routes';
import UserAPI from '../../api/UserAPI';
import Header from '../../layout/Header';
import Footer from '../../layout/Footer';
import './App.css';

class App extends React.Component {
   state = {
    user: '',
    username: '',
    id: '',
  }

  componentDidlMount() {
    // if there's a token in local storage
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
      this.setState({
        user: decoded.email,
        id: decoded._id,
        username: decoded.username,
      })
    }
  }

  register = (user) => {
    UserAPI.register(user)
      .then(res => {
        if (res.status === 200) {
          const token = res.data.token;
          // set the token to local storage
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
          this.setState({
            user: decoded.email,
            id: decoded._id,
            username: res.data.username,
          })
        }
      })
      .catch(err => console.log(err));
  }

  login = (user) => {
    UserAPI.login(user)
    .then(res => {
      if (res.status === 200) {
        const token = res.data.token;
        // set the token to local storage
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
        const decoded = jwt_decode(token);
        console.log(res)
        // set the state to the decoded user information
        this.setState({
          user: decoded.email,
          id: decoded._id,
          username: res.data.username,
        })
      }
    })
    .catch(err => console.log(err));
  }

  logout = () => {
    // delete the token from localStorage
    localStorage.removeItem('jwtToken');
    setAuthHeader();
    this.setState({
      user: '',
      id: ''
    })
  }

   render() {
    return (
      <div id="app">
        <Header
          logout={this.logout}
          user={this.state.user}
        />
         <Routes 
          user={this.state}
          login={this.login}
          register={this.register}
        />
        <Footer />
      </div>
    )
  }
}

export default App;