import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
// import './Header.css';

// if the user is logged in, welcome them and show a logout button
// if not, show them the register and login buttons
const Header = (props) => {
  return (
    <div id="header">
      <h1>Epistemology</h1>
        <div className="Nav">
            <NavBar />
        </div>

      {
        (props.user) 
        ? <div className="login">
            <button>Welcome, {props.user}</button>
            <button onClick={props.logout}>Logout</button>
          </div>
        : <div className="login">
            <Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link>
          </div>
      }
    </div>
  )
}

export default Header;