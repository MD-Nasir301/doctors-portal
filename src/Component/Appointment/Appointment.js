import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import img from '../../images/Mask Group 1.png'
import './Appointment.css';
import Nav from '../Nav/Nav';
import { getDatabaseCart } from '../../utilities/databaseManager';

const Appointment = () => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
                "July", "August", "September", "October", "November", "December"
                ];
    const [newDate,setNewDate] = useState(new Date())
    const date = newDate.getDate()
    const month = newDate.getMonth()
    const year = newDate.getFullYear()
    const fullDate = `${date} ${monthNames[month]} ${year}`

    const onChange = (date)=> {
        setNewDate(date)
    }

    let appointmentData = {"date":fullDate}
    const handleAppointment = (appointment)=>{
        appointmentData.appointmentName= appointment

       let myObj = JSON.stringify(appointmentData)
       localStorage.setItem("appointmentData",myObj)

       const local = JSON.parse(localStorage.getItem("appointmentData")) 
       console.log("aaaaaaaaaaaaa",local);
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
                <h2>Available Appointments on  {fullDate} </h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Orthodontics</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <a href="/appointmentForm"><button onClick={()=>handleAppointment("Teeth Orthodontics")} className="my-btn">BOOK APPOINTMENT</button></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Cosmetic Dentistry</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p>10 SPACES AVAILABLE</p>
                                <a href="/appointmentForm"><button onClick={()=>handleAppointment("Cosmetic Dentistry")} className="my-btn">BOOK APPOINTMENT</button></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Cleaning</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <a href="/appointmentForm"><button onClick={()=>handleAppointment("Teeth Cleaning")} className="my-btn">BOOK APPOINTMENT</button></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Cavity Protection</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <a href="/appointmentForm"><button onClick={()=>handleAppointment("Cavity Protection")} className="my-btn">BOOK APPOINTMENT</button></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Orthodontics</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <a href="/appointmentForm"><button onClick={()=>handleAppointment("Teeth Orthodontics")} className="my-btn">BOOK APPOINTMENT</button></a>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="single-appointment">
                                <h3>Teeth Orthodontics</h3>
                                <h5>8:00 Am - 9:00 AM</h5>
                                <p >10 SPACES AVAILABLE</p>
                                <a href="/appointmentForm"><button onClick={()=>handleAppointment("Teeth Orthodontics")} className="my-btn">BOOK APPOINTMENT</button></a>
                            </div>
                        </div>
  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointment;