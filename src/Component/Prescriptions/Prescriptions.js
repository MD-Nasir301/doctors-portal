import React, { useState }  from 'react';
import './Prescriptions.css'

const Prescriptions = () => {
    
    const patientData = JSON.parse(localStorage.getItem("patientData")) 
    const [value, setValue] = useState()
    const [prescriptionId, setPrescriptionId] = useState()
    const [sending, setSending] = useState(false)
    

    let prescription = {}
    const addPrescription = ()=>{
        setSending(true)
        prescription.id = patientData.patientId;
        prescription.name = patientData.patientName;
        prescription.medicine = value
        fetch('https://doctorportalbackend.herokuapp.com/addPrescription',{
            method: "post",
            body: JSON.stringify(prescription),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
          .then(data => {
            setPrescriptionId(data._id)
            setSending(false)
          });
    }

    const handleChange = (event)=>{
        setValue(event.target.value);
    }

    return (
        <div>   
            
            <div className="patient-info">                
                <p>Name : <span>{patientData.patientName}</span> </p> 
                <p>Problem : <span>{patientData.patientProblem}</span> </p> 
                <p>Age : <span>{patientData.patientAge}  </span> </p> 
            </div>
            <div className="sending-info">
            {
              sending &&   <p>sending....</p>
            } 
            {
                prescriptionId && <p>Prescription Successfully Added</p>
            }
            </div>
            <div className="prescription-area">
                <textarea name="prescription" value={prescriptionId && ''} onChange={handleChange}placeholder="Write Prescription" id="" ></textarea>
                <button onClick={addPrescription} className="my-btn btn-center">Add</button>
            </div>
        </div>
    );
};

export default Prescriptions;