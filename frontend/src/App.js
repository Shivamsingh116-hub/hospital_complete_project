import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Home from './Components/navpages/Home/Home'
import About from './Components/navpages/About/About'
import Disease from './Components/navpages/Disease/Disease'
import Login from './Components/navpages/Login_out/Login/Login'
import Signup from './Components/navpages/Login_out/Signup/Signup'
import Billing from './Components/navpages/Billing/Billing'
import PatientAppointment from './Components/navpages/Appointment/PatientAppointment'
import DoctorAppointment from './Components/navpages/Appointment/DoctorAppointment'
import Doctors from './Components/navpages/Doctor/Doctors'
import Contact from './Components/navpages/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='disease' element={<Disease />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/billing' element={<Billing />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/patient_doctors_section' element={<Doctors />} />
        <Route path='/patient_appointment' element={<PatientAppointment />} />
        <Route path='/doctor_appointment' element={<DoctorAppointment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App