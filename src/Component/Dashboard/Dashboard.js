import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons'
import Sidebar from "../Sidebar/Sidebar";
const Dashboard = () => {
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];

    const [last15Appointments, setLast15Appointments] = useState([])  
    const [allAppointments, setAllAppointment] = useState([])
    const [last15Date, setLast15Date] = useState([])
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaa", last15Date)

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
        fetch('https://doctorportalbackend.herokuapp.com/appointments')
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
        fetch('https://doctorportalbackend.herokuapp.com/appointments')
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

    let patientData = {}
    const addPrescription = (name,problem,age,id)=>{
      patientData.patientName = name
      patientData.patientProblem = problem
      patientData.patientAge = age
      patientData.patientId = id
      const patientDataStorage = JSON.stringify(patientData)
      localStorage.setItem('patientData', patientDataStorage)
    }

    const [prescriptionsId, setPrescriptionsId] = useState({})

    const [prescriptions, setPrescriptions] = useState()
    const [medicine,setMedicine ] = useState()
    const [hide,setHide ] = useState(true)


    useEffect(()=> {
        fetch('https://doctorportalbackend.herokuapp.com/prescriptions')
        .then(res => res.json())
        .then(data => {
            setPrescriptions(data)
            setPrescriptionsId(data.map(id => id.id))

        })
    },[])

    const showPrescription = (presId)=>{
      console.log("idddddddd", presId);
      if(prescriptions){
       const data = prescriptions.find(id => id.id === presId ) 
        setMedicine(data)
        setHide(false)
         
      }
    }
    const handleHide = ()=>{
      setHide(true)
    }

  return (
    <div className="page-wrapper">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>
      {
        !hide &&
        <div className="prescription">
          <h4> {medicine && medicine.name} </h4> 
          <textarea name="" value={ medicine && medicine.medicine}></textarea>
          <button onClick={handleHide} className="my-btn">Hide</button>
        </div>
      }

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
                                                {
                                                 prescriptionsId.length > 0 && prescriptionsId.find(id => id === apm._id) ?<td><button onClick={()=>showPrescription(apm._id)} className="my-btn btn2">View</button></td> : <h6>Not added</h6>
                                                }
                                                
                                                <td className="select-action">
                                                  <select className="my-btn btn2 select-btn">
                                                    <option value="saab">Action</option>
                                                    <option value="saab">Pending</option>
                                                    <option value="opel">Approved</option>
                                                    <option style={{background:'red'}} value="audi">Cancelled</option>
                                                  </select>
                                                  <a href="/doctor/prescription"> <button className="edit-btn"  onClick={()=>addPrescription(apm.name,apm.problem,apm.age,apm._id)}> <FontAwesomeIcon icon={faPen} /> </button></a>
                                                </td>
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
                                                {
                                                 prescriptionsId.length > 0 && prescriptionsId.find(id => id === apm._id) ?<td><button onClick={()=>showPrescription(apm._id)} className="my-btn btn2">View</button></td> : <h6>Not added</h6>
                                                }
                                                
                                                <td className="select-action">
                                                  <select className="my-btn btn2 select-btn">
                                                    <option value="saab">Action</option>
                                                    <option value="saab">Pending</option>
                                                    <option value="opel">Approved</option>
                                                    <option style={{background:'red'}} value="audi">Cancelled</option>
                                                  </select>
                                                  <a href="/doctor/prescription"> <button className="edit-btn"  onClick={()=>addPrescription(apm.name,apm.problem,apm.age,apm._id)}> <FontAwesomeIcon icon={faPen} /> </button></a>
                                                </td>
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
