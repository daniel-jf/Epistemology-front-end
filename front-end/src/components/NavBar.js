import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return(
        <nav className="navbar">
            <a href="/" className="logo">
            </a>
        {/* {
            (props.user) 
            ?  */}
            <div className="login">
                <ul className="nav justify-content-end">
                    <li className="nav-item">
                        <Link to="/Play" className="nav-link active">Play</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/Learn' className="nav-link">Learn</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/profile' className="nav-link">My Account</Link>
                    </li>
                    <button onClick={props.logout}>Logout</button>
                </ul>
            </div>
        {/* //     : <div className="login">
        //         <ul className="nav justify-content-end">
        //             <li className="nav-item">
        //                 <Link to="#" className="nav-link active">About</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/register' className="nav-link">Sign-Up</Link>
        //             </li>
        //             <li className="nav-item">
        //                 <Link to='/login' className="nav-link">Login</Link>
        //             </li>
        //         </ul>
        //     </div>
        // } */}
        </nav>
    )
}

export default NavBar;