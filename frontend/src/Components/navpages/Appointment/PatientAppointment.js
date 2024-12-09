import React, { useContext, useEffect, useState } from 'react'
import './PatientAppointment.css'
import axios from 'axios'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import { Context } from '../../context/Context'
import { useNavigate } from 'react-router-dom'
const PatientAppointment = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [date, setDate] = useState('')
  const [disease, setDisease] = useState('')
  const { doctorName, setDoctorName, drAppointUsername, patientAppointDataCome, setpatientAppointDataCome } = useContext(Context)
  const [time, setTime] = useState('')
  const [message, setMessage] = useState('')
  const [currentDateSend, setCurrentDateSend] = useState('')
  const { loginUsername } = useContext(Context)
  const currentDate = new Date()
  const dateNo = currentDate.getDate()
  const month = currentDate.getMonth()
  const year = currentDate.getFullYear()
  const hour = currentDate.getHours()
  const minute = currentDate.getMinutes()
  const [submitMessage, setSubmitMessage] = useState('')
  const navigate = useNavigate()
  const [formProgress] = useState("Pending..")
  console.log(loginUsername)
  const apiUrl = process.env.REACT_APP_API_URL;

  useEffect(() => {
    axios.post(`${apiUrl}/get_patient_appointment_data_for_patient`, { loginUsername: loginUsername })
      .then((res) => {
        setpatientAppointDataCome(res.data)
      }).catch((err) => [
        console.log(err, "Error")
      ])
  })
  const handleSubmit = (e) => {
    setCurrentDateSend(`${dateNo}/${month}/${year} ${hour}:${minute}`)
    e.preventDefault()
    const patientAppointmentData = {
      loginUsername: loginUsername, currentDateSend: currentDateSend,
      drAppointUsername: drAppointUsername,
      name: name, email: email, number: number, date: date,
      disease: disease, doctorName: doctorName,
      time: time, message: message, formProgress: formProgress
    }
    axios.post(`${apiUrl}/add_patient_appointment_data`, patientAppointmentData).then((res) => {
      if (res.data.success === false) {
        alert(res.data.message)
      }
    }).catch(err => {
      console.log(err, "error")
    })
    setSubmitMessage('Thank you for submitting your appointment request. Your form has been forwarded for further processing, and we will contact you shortly with the confirmation details.')
    setTimeout(() => {
      setSubmitMessage('')
    }, 5000);
    setpatientAppointDataCome([...patientAppointDataCome, patientAppointmentData])
  }
  const handleDelete = (_id) => {
    axios.post(`${apiUrl}/delete_appointment_from_patient`,{_id:_id}).then((res)=>{
      console.log(res,"Success")
    }).catch((err)=>{
      console.log(err)
    })
  }
  // console.log(patientAppointDataCome)
  return (
    <div className='patient-appointment-component'>
      <div className='appointment-content-welcoming'>
        <div className='appointment-heading'>
          <h2>Book Your Appointment Today!</h2>
          <p>We understand the importance of healthcare, and that's why we make booking an appointment with our clinic quick and easy. Whether you're looking to schedule a check-up, follow-up consultation, or treatment appointment, our simple and user-friendly form allows you to choose the date and time that works best for you. Simply fill in your details, select a time, and submit the form to confirm your appointment. Our team will take care of the rest, and you'll receive a confirmation shortly. Get started now and take the first step toward better health!</p>
        </div>
      </div>
      <form className='form-container' onSubmit={handleSubmit}>
        <h2>Make An Appointment</h2>
        <div className='form-content'>
          <div className='left-form'>
            <div className='form-item'>
              <label>Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter your name...' />
            </div>
            <div className='form-item'>
              <label>Email</label>
              <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email...' />
            </div>
            <div className='form-item'>
              <label>Number</label>
              <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} placeholder='Enter your number...' />
            </div>
            <div className='form-item'>
              <label>Date</label>
              <input value={date} onChange={(e) => setDate(e.target.value)} type="date" />
            </div>
          </div>
          <div className='right-form'>
            <div className='form-item'>
              <label>Disease</label>
              <input type="text" value={disease} onChange={(e) => setDisease(e.target.value)} placeholder='Enter disease from Disease section...' />
            </div>
            <div className='form-item'>
              <label>Doctor Name</label>
              <input type="text" onFocus={() => {
                navigate('/patient_doctors_section')
              }} value={`Dr.${doctorName}`} onChange={(e) => {
                navigate('/patient_doctors_section')
                setDoctorName(e.target.value)
              }} placeholder='Select doctor from Doctors section...' />
            </div>
            <div className='form-item'>
              <label>Time</label>
              <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
            </div>
            <div className='form-item'>
              <label>Message</label>
              <input type="text" value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Enter your message...' />
            </div>
          </div>
        </div>
        <button className='submitBtn' type="submit">Submit</button>
        {submitMessage && <p className='submit-message'>{submitMessage}</p>}
      </form>
      <div className='appointments-submit'>
        <h2>Submit Appointments</h2>
        {patientAppointDataCome.map((data) => {
          return <div className='appointment-card'>
            <h3>{data.name} (Appointment send to Dr. {data.doctorName})</h3>
            <p>Disease: {data.disease}</p>
            <p>Contact No: {data.number}</p>
            <p>Appointment Date and Time: {data.time} {data.date}</p>
            <p>Message: {data.message}</p>
            <div className='appointment-progress'>{data.formProgress}</div>
            <div className='end-card-item'>
              <p className='recieved-time'>{data.currentDateSend}</p>
              <DeleteForeverTwoToneIcon onClick={() => handleDelete(data._id)} className='delete-icon' />
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default PatientAppointment