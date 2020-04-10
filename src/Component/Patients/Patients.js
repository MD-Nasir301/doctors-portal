import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Patients = () => {
  
  const [patients, setPatients] = useState()
  const [loading, setLoading] = useState(true)

  useEffect(()=> {
    fetch('https://doctorportalbackend.herokuapp.com/appointments')
    .then(res => res.json())
    .then(data => {
      setPatients(data)
      setLoading(false)
    })
  },[])

    return (
<div className="page-wrapper">
      <div className="sidebar">
        <Sidebar></Sidebar>
      </div>

      <div className="patients-area">
        <h4>Patients</h4>
        <div className="all-patient">
          <div className="all-patient-heading d-flex justify-content-between">
            <p>All Patients</p>
            <p>Week</p>
          </div>
          <div className="all-patients-table-area">
            <div className="row">
              <table className="all-patients-table">
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
                  loading && <p style={{textAlign:'center',fontSize:'25px'}} >Loading...</p>
                }

                {
                  patients && patients.map(data =>
                   <tr>
                    <td> {(patients.indexOf(data)+1)} </td>
                    <td> {data.date} </td>
                    <td> {data.time} </td>
                    <td> {data.name} </td>
                    <td> {data.phone} </td>
                    <td><button className="my-btn btn2">View</button></td>
                    <td><button className="my-btn btn2">Action</button></td>
                </tr>)
                }


              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Patients;