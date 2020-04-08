import React from 'react';
import './AppointmentForm.css'
import { useForm } from 'react-hook-form'
import Nav from '../Nav/Nav';

const AppointmentForm = () => {

    const { register, handleSubmit, watch, errors } = useForm()
    const onSubmit = data => { console.log(data) }

    return (
        <div className="appointment-container">
            <Nav></Nav>
                <h3> Appointment Information</h3>
            <div className="form-area">
                    <form className="appointment-form" onSubmit={handleSubmit(onSubmit)}>
                        <p>(Teeth clear)</p>
                    <input name="Time" type="time" placeholder="time"   defaultValue="" ref={register({ required: true })} />
                    <input name="Name" placeholder="Your name"  ref={register({ required: true })} />
                    <input name="Phone" placeholder="Phone Number"  type="tel" ref={register({ required: true })} />
                    <input name="Email" placeholder="Email"  type="email" ref={register({ required: true })} />
                    <input name="Date"  ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    <button className="my-btn sub-btn" type="submit">SEND</button>
                    <div className="clear"></div>
                </form>
            </div>
        </div>
    );
};

export default AppointmentForm;