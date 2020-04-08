import React from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Patients = () => {
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
                <tr>
                    <td>01</td>
                    <td>24 February 2020</td>
                    <td>07:12 PM</td>
                    <td>Karim Ahmed</td>
                    <td>01715-03064510</td>
                    <td><button className="my-btn btn2">View</button></td>
                    <td><button className="my-btn btn2">Action</button></td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Patients;