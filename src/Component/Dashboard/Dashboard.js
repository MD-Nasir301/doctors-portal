import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import Sidebar from "../Sidebar/Sidebar";
const Dashboard = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

    const [last15Appointments, setLast15Appointments] = useState([])  
    const [allAppointments, setAllAppointment] = useState([])
    const [last15Date, setLast15Date] = useState([])

    const [recentData, setRecentData] = useState(true)
    const [loading, setLoading] = useState(true)
    const [loadingAll, setLoadingAll] = useState(false)

    const newDate = new Date()
    const date = newDate.getDate();
    const month = newDate.getMonth();
    const year = newDate.getFullYear();
    const fullDate = `${date} ${monthNames[month]} ${year}`;

    const allDate =  last15Appointments.map(dt => dt.date)
    const todayDates =  allDate.filter(dt => dt === fullDate);

    useEffect(()=>{
        fetch('http://localhost:3300/appointments')
        .then(res => res.json())
        .then(data => {
          const last15 = data.slice(Math.max(data.length - 15, 0))
            setLast15Appointments(data)
            setLast15Date(last15.reverse())
            setLoading(false)
        })
    },[])
    
    const allData = ()=> {
        setLoadingAll(true)
        fetch('http://localhost:3300/appointments')
        .then(res => res.json())
        .then(data => {
          setAllAppointment(data)
          setLoading(false)
          setLoadingAll(false)
          setRecentData(false)
        })
    }

    const recentAppointments = ()=> {
      window.location.reload();
    }


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
                    <h1>05</h1>
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
                  {
                      loading ? <span className="loading">Loading...</span> :<h1> {todayDates.length} </h1>
                    }
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
                    {
                      loading ? <span className="loading">Loading...</span> :<h1> {last15Appointments.length} </h1>
                    }
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
                  {
                    loading ? <span className="loading">Loading...</span> :<h1> {last15Appointments.length} </h1>
                  }
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
            {
              recentData ? <p>Recent Appointments (15)</p> : <p>All Appointments</p>
            }
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
                  loading &&  <h4 style={{textAlign: 'center' }}> Loading.... </h4>
                }
                {
                 recentData &&   last15Date.map(apm =>  <tr className="apmRow">
                                                <td> {(last15Date.indexOf(apm)+1)}</td>
                                                <td> {apm.date} </td>
                                                <td> {apm.time} PM</td>
                                                <td> {apm.name} </td>
                                                <td> {apm.phone} </td>
                                                <td><button className="my-btn btn2">View</button></td>
                                                <td><button className="my-btn btn2">Action</button></td>
                                            </tr>
                                        )
                } 
     
                {
                  allAppointments.map(apm =>  <tr className="apmRow">
                                                <td> {(allAppointments.indexOf(apm)+1)}</td>
                                                <td> {apm.date} </td>
                                                <td> {apm.time} PM</td>
                                                <td> {apm.name} </td>
                                                <td> {apm.phone} </td>
                                                <td><button className="my-btn btn2">View</button></td>
                                                <td><button className="my-btn btn2">Action</button></td>
                                            </tr>
                                        )
                } 
                {
                  loadingAll && <p>Loading...</p>
                }
                {
                  !loading && allAppointments.length === 0 && <button className="my-btn all-data-btn" onClick={allData}>All Appointments</button>
                } 
                {
                  allAppointments.length > 0 && <button className="my-btn all-data-btn" onClick={recentAppointments}>Hide</button>
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
