import React from 'react';

const NavBar = () => {
    return(
        <nav className="site-header sticky-top py-1">
            <div className="container d-flex flex-column flex-md-row">
            <a className="py-2 d-none d-md-inline-block" href="#">About</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Login</a>
            <a className="py-2 d-none d-md-inline-block" href="#">Sign-Up</a>
        </div>
    </nav>
    )
}

export default NavBar;