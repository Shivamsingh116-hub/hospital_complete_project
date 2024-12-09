import React, { useContext } from 'react'
import './Doctor.css'

import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
const Doctors = () => {
    const { doctorsData, setDoctorName,setDrAppointUsername } = useContext(Context)
    const handleBookButton = (data) => {
        setDoctorName(data.name)
        setDrAppointUsername(data.username)
        navigate('/patient_appointment')
    }
    const navigate = useNavigate()
    return (
        <div className='doctors-component'>
            {
                doctorsData.map((data) => {
                    return <div className='doctor-card-container '>
                        <h2>{`Dr. ${data.name}`}</h2>
                        <div className='image-conatiner'></div>
                        <p>{data.email}</p>
                        <p>{data.number}</p>
                        <p>{data.username},{data.password}</p>
                        <button onClick={() => {
                            handleBookButton(data)
                        }} className='book-btn'>Book Appointment</button>
                    </div>
                })
            }
            {/* <h2>Doctor name</h2>
                <div className='image-conatiner'></div>
                <p>Every second Now, you are not only sending the time but also displaying it in the desired format, extracting it from</p>
                <p>Experience(8 year)</p>
                <p>Age:2/24/2006</p>
                <button className='book-btn'>Book Appointment</button> */}

        </div>
    )
}

export default Doctors