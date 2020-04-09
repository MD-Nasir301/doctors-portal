import React from 'react';
import './Prescriptions.css'

const Prescriptions = () => {
    return (
        <div>
            <div className="prescription-area">
                <textarea name="prescription" placeholder="Write Prescription" id="" ></textarea>
                <button className="my-btn center">Add</button>
            </div>
        </div>
    );
};

export default Prescriptions;