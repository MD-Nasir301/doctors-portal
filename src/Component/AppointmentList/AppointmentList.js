import React, { useState } from 'react';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
import "./AppointmentList.css";
import Sidebar from "../Sidebar/Sidebar";
const AppointmentList = () => {
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
    const handleDate = ()=>{
    console.log("aaaaaaaaaaa",fullDate);
    }



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
                        <tr>
                        <td>Karim Ahmed</td>
                        <td>7:30 PM</td>
                        <td>
                            <button className="my-btn visit-btn">Not visited</button>
                        </td>
                        </tr>
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
