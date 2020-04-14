import React from 'react';
import NavBar from '../components/NavBar';
import '../components/Home/home.css';

// if the user is logged in, welcome them and show a logout button
// if not, show them the register and login buttons
const Header = (props) => {
  return (
    <div id="header">
        <div className="Nav">
          <NavBar />
       </div>
    </div>
  )
}

export default Header;