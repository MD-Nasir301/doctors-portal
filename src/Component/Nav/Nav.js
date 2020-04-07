import React from 'react';
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav className="main-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/doctor">Doctor</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;