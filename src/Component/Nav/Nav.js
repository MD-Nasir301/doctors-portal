import React from 'react';
import './Nav.css'
const Nav = () => {
    return (
        <div>
            <nav className="main-menu">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/doctor/appointmentList">Doctor</a></li>
                    <li><a href="/doctor/dashboard">Dashboard</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;