import React from 'react';
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-area">
                <ul className="sidebar-ul">
                    <li><a href="/"> Home</a></li>
                    <li><a href="/doctor/dashboard"> Dashboard</a></li>
                    <li><a href="/doctor/appointmentList"> Appointment</a></li>
                    <li><a href="/doctor/patients"> Patient</a></li>
                    <li><a href="/doctor/prescription"> Prescription</a></li>
                    <li><a href="/doctor/siting">Setting</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;