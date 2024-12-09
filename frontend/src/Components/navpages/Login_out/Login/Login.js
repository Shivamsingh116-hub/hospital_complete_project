import React, { useContext, useState } from 'react'
import './Login.css'
import care from './medwin-cares.png'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../context/Context'
const apiUrl = process.env.REACT_APP_API_URL;
const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const { setWhoLogin, setLoginUsername, drAppointUsername, setpatientAppointDataForDoctor } = useContext(Context)
    const matchData = { username: username, password: password }
    const { setDoctorData } = useContext(Context)
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate('./signup')
    }
    // useEffect(() => {
    //     axios.get("http://localhost:4000/add_login_data").then(res => console.log(res)).catch(err => console.log(err))
    // })
    const handlePatientSubmit = (e) => {
        e.preventDefault()
        axios.post(`${apiUrl}/match_patient_login_data`, matchData).then((response) => {
            if (response.data.success) {
                alert(response.data.message)
                setWhoLogin("patientLogin")
                setLoginUsername(response.data.username)
                axios.post(`${apiUrl}/get_doctors_data`, { drAppointUsername: drAppointUsername })
                    .then((res) => {
                        setDoctorData(res.data)
                    }).catch((err) => {
                        console.log(err)
                    })
                // axios.post("http://localhost:4000/get_patient_appointment_data_for_patient",{loginUsername:response.data.username})
                // .then((res)=>{
                //     setpatientAppointDataCome(res.data)
                // }).catch((err)=>[
                //     console.log(err,"Error")
                // ])
                navigate('/')
            } else if (response.data.success === false) {
                alert(response.data.message)
            } else {
                alert("Another error in login")
            }
        }).catch((err) => {
            console.log("error", err)
        })
    }
    const handleDoctorlogin = (e) => {
        e.preventDefault()
        axios.post(`${apiUrl}/match_doctor_login_data`, matchData).then((response) => {
            if (response.data.success) {
                alert(response.data.message)
                setWhoLogin("doctorLogin")
                setLoginUsername(response.data.username)
                axios.post(`${apiUrl}/get_patient_appointment_data`, { username: response.data.username })
                    .then((res) => {
                        console.log(res)
                        setpatientAppointDataForDoctor(res.data)
                    }).catch((err) => {
                        console.log(err)
                    })
                navigate('/')
            } else if (response.data.success === false) {
                alert(response.data.message)
            } else {
                alert("Another error in login")
            }
        }).catch((err) => {
            console.log("error", err)
        })
    }

    return (
        <div className='login-page'>
            <form onSubmit={handlePatientSubmit}>
                <img src={care} alt='*' />
                <div className='form-items'>
                    <label>Username</label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} name='username' placeholder='Enter username...' />
                </div>
                <div className='form-items'>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter password...' />
                </div>
                <div className='login-btn-container'>
                    <button type="submit" className='login-btn'>Login as Patient</button>
                    <button onClick={handleDoctorlogin} className='login-btn doctor-login-btn'>Login as Doctor</button>
                </div>

                <a onClick={handleRegister} href='/signup'>Register new user...</a>
            </form>
        </div>
    )
}

export default Login