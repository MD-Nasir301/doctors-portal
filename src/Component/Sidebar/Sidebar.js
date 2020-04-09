import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFileAlt,faCog,faCalendar,faUsers, faHome, faTable, } from '@fortawesome/free-solid-svg-icons'
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div>
            <div className="sidebar-area">
                <ul className="sidebar-ul">
                    <li><a href="/"><FontAwesomeIcon icon={faHome} /> Home</a></li>
                    <li><a href="/doctor/dashboard"><FontAwesomeIcon icon={faTable} /> Dashboard</a></li>
                    <li><a href="/doctor/appointmentList"><FontAwesomeIcon icon={faCalendar} /> Appointment</a></li>
                    <li><a href="/doctor/patients"><FontAwesomeIcon icon={faUsers} />  Patient</a></li>
                    <li><a href="/doctor/prescription"><FontAwesomeIcon icon={faFileAlt} />  Prescription</a></li>
                    <li><a href="/doctor/sitting"><FontAwesomeIcon icon={faCog} /> Setting </a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;