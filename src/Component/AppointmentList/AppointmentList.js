import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./AppointmentList.css";
import Sidebar from "../Sidebar/Sidebar";
const AppointmentList = () => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const [newDate, setNewDate] = useState(new Date());
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear();
  const fullDate = `${date} ${monthNames[month]} ${year}`;
  
  
  const [loading , setLoading] = useState(true)

  const onChange = (getNewDate) => {
    setNewDate(getNewDate);
    setLoading(true)
  };

  const [appointments, setAppointments] = useState();
  useEffect(() => {
    fetch("http://localhost:3200/appointments/" + fullDate)
      .then((res) => res.json())
      .then((data) => {
        setAppointments(data);
        setLoading(false)
      });
  }, [fullDate]);


  return (
    <div>
      <div className="appointmentList-container">
        <div className="sidebar">
          <Sidebar></Sidebar>
        </div>
        <div className="appointments-list-area">
          <h4>Appointments</h4>
          <div className="row">
            <div className="col-md-6">
              <div className="calenderTwo">
                <Calendar onChange={onChange} value={newDate} />
              </div>
            </div>
            <div className="col-md-6">
              <div className="appointments-list">
                <div className="apm-list-header">
                  <span>Appointments</span>
                  <span> {fullDate} </span>
                </div>
                <div className="apm-list-table">
                  <table>
                    <tr className="table-heading">
                      <th>Name</th>
                      <th>Schedule</th>
                      <th>Action</th>
                    </tr>
                    {
                      loading && <p style={{display:'block'}}>Loading...</p> 
                    }

                    {
                      appointments && appointments.length < 1 && <p>Empty</p>
                    }

                    {
                     appointments &&  appointments.map((apm) => (
                      <tr>
                        <td> {apm.name} </td>
                        <td> {apm.time} </td>
                        <td>
                          <button className="my-btn visit-btn">
                            Not visited
                          </button>
                        </td>
                      </tr>
                    ))
                    }

                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentList;
