import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
const Dashboard = () => {
    const [appointments, setAppointments] = useState([])
    

    useEffect(()=>{
        fetch('http://localhost:3300/appointments')
        .then(res => res.json())
        .then(data => {
            setAppointments(data)
        })
    },[])




  return (
    <div className="page-wrapper">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className="dashboard-area">
        <h4>Dashboard</h4>
        <div className="status-bar">
          <div className="row">
            <div className="col-md-3">
              <div className="apm-status-box pending-apm">
                <div className="row">
                  <div className="col-md-5">
                    <h1>09</h1>
                  </div>
                  <div className="col-md-6">
                    <p>Pending</p>
                    <p>Appointments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="apm-status-box today-apm">
                <div className="row">
                  <div className="col-md-5">
                    <h1>09</h1>
                  </div>
                  <div className="col-md-6">
                    <p>Today</p>
                    <p>Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="apm-status-box total-apm">
                <div className="row">
                  <div className="col-md-5">
                    <h1> {appointments.length} </h1>
                  </div>
                  <div className="col-md-6">
                    <p>Total</p>
                    <p>Appointments</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="apm-status-box total-patients">
                <div className="row">
                  <div className="col-md-5">
                    <h1>09</h1>
                  </div>
                  <div className="col-md-6">
                    <p>Total</p>
                    <p>Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="recent-appointment">
          <div className="recent-apm-heading d-flex justify-content-between">
            <p>Recent Appointment</p>
            <p>Week</p>
          </div>
          <div className="recent-apm-table-area">
            <div className="row">
              <table className="recent-apm-table">
                <tr>
                  <th>Sr.No</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Prescription</th>
                  <th>Action</th>
                </tr>
                {
                appointments.length ?  <h4 style={{display:'none'}}>Loading....</h4> : <h4 style={{display:'block',textAlign: 'center',
                margin: '40px'
            }}>Loading....</h4>
                }
                {
                    appointments.map(apm =>  <tr className="apmRow">
                                                <td> {(appointments.indexOf(apm)+1)}</td>
                                                <td> {apm.date} </td>
                                                <td> {apm.time} PM</td>
                                                <td> {apm.name} </td>
                                                <td> {apm.phone} </td>
                                                <td><button className="my-btn btn2">View</button></td>
                                                <td><button className="my-btn btn2">Action</button></td>
                                            </tr>
                                        )
                }
                        

              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
