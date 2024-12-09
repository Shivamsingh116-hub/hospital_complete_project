import React, { useState, useEffect, useContext } from 'react';
import './Billing.css';
import CircleIcon from '@mui/icons-material/Circle';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import { Context } from '../../context/Context';
import axios from 'axios';
const apiUrl = process.env.REACT_APP_API_URL;

function Billing() {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [bill, setBill] = useState('');
  const { loginUsername } = useContext(Context)
  const [patients, setPatients] = useState([]);
  useEffect(() => {
    axios.post(`${apiUrl}/get_billing_data`, { loginUsername: loginUsername }).then((res) => {
      setPatients(res.data)
    }).catch((err) => {
      console.log(err)
    })
  })
  const addPatient = () => {
    if (name && age && bill) {
      const newPatient = { name: name, age: age, bill: bill, loginUsername: loginUsername };
      axios.post(`${apiUrl}/add_billing`, newPatient).then((res) => {
        console.log(res.data)
      }).catch((err) => {
        console.log(err)
      })
      setName('');
      setAge('');
      setBill('');
    } else {
      alert("Please fill out all fields.");
    }
  };

  // Handle deleting a patient
  const deletePatient = (id) => {
    
    axios.post(`${apiUrl}/delete_billing_data`,{id:id}).then((res) => {
      console.log(res, "Success")
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div className="container">
      <h1 className="title">Patient Billing</h1>

      {/* Patient Form */}
      <div className="billing-form-container">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter Patient Name"
          className="input-field"
          required
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="Enter Patient Age"
          className="input-field"
          required
        />
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(e.target.value)}
          placeholder="Enter Bill Amount"
          className="input-field"
          required
        />
        <button className="add-btn" onClick={addPatient}>Add Patient</button>
      </div>

      {/* Patient List */}
      <div className="patients-list">
        <h2>Patient List</h2>
        {patients.length === 0 ? (<p className="empty-bill">No Patient<HourglassEmptyIcon /></p>) :
          (<ul>
            {patients.map((patient, index) => (
              <li key={index} className="patient-item">
                <CircleIcon className='circle' fontSize='inherit' />
                <div className="patient-info">
                  <span>Name: {patient.name}</span>
                  <span>Age: {patient.age}</span>
                  <span>Bill: ${patient.bill}</span>
                </div>
                <button className="delete-btn" onClick={() => deletePatient(patient._id)}>Delete</button>
              </li>
            ))}
          </ul>)}
      </div>
    </div>
  );
}

export default Billing;
