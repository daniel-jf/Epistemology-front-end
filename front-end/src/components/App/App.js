import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthHeader from '../../utils/setAuthHeader';
import Routes from '../../config/routes';
import UserAPI from '../../api/UserAPI';
import Header from '../../layout/Header';
import './App.css';

class App extends React.Component {
   state = {
    user: '',
    id: ''
  }

  componentDidMount() {
    // if there's a token in local storage
    if (localStorage.jwtToken) {
      setAuthHeader(localStorage.jwtToken);
      const decoded = jwt_decode(localStorage.getItem('jwtToken'));
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
          const token = res.data.token;
          // set the token to local storage
          localStorage.setItem('jwtToken', token);
          setAuthHeader(token);
          const decoded = jwt_decode(token);
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
        const token = res.data.token;
        // set the token to local storage
        localStorage.setItem('jwtToken', token);
        setAuthHeader(token);
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
          user={this.state.user}
          login={this.login}
          register={this.register}
        />
        {/* <Footer /> */}
      </div>
    )
  }
}

export default App;