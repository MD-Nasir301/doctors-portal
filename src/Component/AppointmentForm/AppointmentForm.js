import React, { useState } from 'react';
import './AppointmentForm.css'
import { useForm } from 'react-hook-form'
import Nav from '../Nav/Nav';

const AppointmentForm = () => {
  
    const appointmentInfo = JSON.parse(localStorage.getItem("appointmentData")) 
    const { register, handleSubmit, errors } = useForm()

    const [addAppointmentId, setAddAppointmentId] = useState()
    const [sending, setSending] = useState()
    
    const onSubmit = appointmentData => { 
        fetch("http://localhost:3200/bookAppointment", {
          method: "post",
          body: JSON.stringify(appointmentData),
          headers: {
            "Content-type": "application/json; charset=UTF-8"
          }
        })
          .then(res => res.json())
          .then(appointmentId => {
            setAddAppointmentId(appointmentId._id)
            setSending(false)
            document.getElementById("form").reset();
          });
         setSending(true)
     }

    return (
        <div className="appointment-container">
            <Nav></Nav>
            {
               addAppointmentId ? <div className="apm-success"> <h3>Your Appointment Send Successfully.</h3> <h5>Your Appointment ID : {addAppointmentId} </h5> </div> : <h3>Appointment Information</h3> 
            }
            {
                sending && <p className="sending">Sending....</p>
            }
                
            <div className="form-area">
                    <form id="form" className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
                    <p>{appointmentInfo.appointmentName} </p>
                    <input name="time" type="time" id="timepicker"  defaultValue="" ref={register({ required: true })} />
                    <input name="name" placeholder="Your name"  ref={register({ required: true })} />
                    <input name="age" type="Number" placeholder="Your age"  ref={register({ required: true })} />
                    <input name="problem" value={appointmentInfo.appointmentName} style={{display:'none'}}  ref={register({ required: true })} />
                    <input name="phone" placeholder="Phone Number"  type="tel" ref={register({ required: true })} />
                    <input name="email" placeholder="Email"  type="email" ref={register({ required: true })} />
                    <input name="date"  value={appointmentInfo.date} ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className="my-btn sub-btn" type="submit">SEND</button>
                    <div className="clear"></div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;