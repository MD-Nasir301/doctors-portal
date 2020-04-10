import React, { useEffect, useState } from 'react';
import './PrescriptionList.css'
import Nav from '../Nav/Nav';

const PrescriptionList = () => {

    const [prescription, setPrescription] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        fetch('http://localhost:3200/prescriptions')
        .then(res => res.json())
        .then(data => {
            setPrescription(data.reverse())
            setLoading(false)
        })
    },[])



    return (
        <div>
            <Nav></Nav>
            <h3 style={{marginLeft:'50px'}}>All Prescriptions</h3>
            <div className="prescription-area">
                <div className="row">
                {
                    loading && <h4 style={{marginLeft:'45%'}}>Loading....</h4>
                }
                {
                   prescription && prescription.map(data => <div className="col-md-4">
                                                <div className="prescription-box">
                                                    <h5> {data.name} </h5>
                                                    <h6>ID: {data.id} </h6>
                                                    <p></p>
                                                    <textarea disabled readonly value={data.medicine} name="medicine" ></textarea>
                                                </div>
                                            </div>)
                }
                    
                </div>

            </div>
        </div>
    );
};

export default PrescriptionList;
