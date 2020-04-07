import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import img from '../../images/Mask Group 1.png'
import './Appointment.css';
import Nav from '../Nav/Nav';

const Appointment = () => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ];
    const [newDate,setNewDate] = useState(new Date())

    const date = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()


    const onChange = (date)=> {
        setNewDate(date)
    }

    return (
        <div>
            <div className="banner-area">
                <Nav></Nav>
                <div className="row">
                    <div className="col-md-5">
                        <div className="calender">
                            <h1>Appointment</h1>
                        <Calendar onChange={onChange} value={newDate} />
                       </div>
                    </div>
                    <div className="col-md-7">
                        <div className="banner-img">
                           <img src={img} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="appointment-area">
                <h2>Available Appointments on  {date+" "+monthNames[month]+" "+year} </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Orthodontics</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <button className="my-btn">Add Appointment</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Cosmetic Dentistry</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p>10 SPACES AVAILABLE</p>
                                <button className="my-btn">Add Appointment</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Cleaning</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <button className="my-btn">Add Appointment</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Cavity Protection</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <button className="my-btn">Add Appointment</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Orthodontics</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <button className="my-btn">Add Appointment</button>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Orthodontics</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <button className="my-btn">Add Appointment</button>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;