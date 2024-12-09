import React, { useContext, useState } from 'react'
import './Signup.css'
import careIcon from './medwin-cares.png'
import { useNavigate } from 'react-router-dom'
import { Context } from '../../../context/Context'
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL;

const Signup = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState()
    const [confirmPassword, setConfirmPassword] = useState('')
    const { password, setPassword, username, setUsername } = useContext(Context)
    // const [isUsername, setIsUsername] = useState()
    const navigate = useNavigate()
    const handleLogin = () => {
        navigate('./login')
    }
    const data = { username: username, password: password, name: name, email: email, number: number }
    const handleSubmit = (e) => {
        e.preventDefault()
        password === confirmPassword ? axios.post(`${apiUrl}/add_patient_login_data`, data)
            .then((response) => {
                if (response.data.success) {
                    alert(response.data.message)
                    navigate('/login')
                }
                else if (response.data.success===false) {
                    alert(response.data.message)
                } else {
                    alert("Another Error in Registration")
                }
            }).catch(err => console.log(err)) : alert('Please fill password and confirm password same')

    }
    const handleDoctorBtn = (e) => {
        e.preventDefault()
        password === confirmPassword ? axios.post(`${apiUrl}/add_doctor_login_data`, data)
            .then((response) => {
                if (response.data.success) {
                    alert(response.data.message)
                    navigate('/login')
                }
                else if (response.data.success === false) {
                    alert(response.data.message)
                } else {
                    alert("Another Error in Registration")
                }
            }).catch(err => console.log(err)) : alert('Please fill password and confirm password same')

    }

    return (
        <div className='signup-page'>
            <form onSubmit={handleSubmit}>
                <img src={careIcon} alt='*' />
                <div className='form-items'>
                    <label>Name</label>
                    <input type='text' value={name} onChange={(e) => setName(e.target.value)} name='name' placeholder='Enter name...' required />
                </div>
                <div className='form-items'>
                    <label>Email Id</label>
                    <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} name='email' placeholder='Enter email...' />
                </div>
                <div className='form-items'>
                    <label>Contact No</label>
                    <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} name='contactNumber' placeholder='Enter number...' required />
                </div>
                <div className='form-items'>
                    <label>Username</label>
                    <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} name='username' placeholder='Enter username...' required />
                </div>
                <div className='form-items'>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)} name='password' placeholder='Enter password...' required />
                </div>
                <div className='form-items'>
                    <label>Confirm Password</label>
                    <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} name='confirmPassword' placeholder='Enter confirm password...' required />
                </div>
                <div className='signup-btn-container'>
                    <button type="submit" className='sign-btn'>Register as Patient</button>
                    <button onClick={handleDoctorBtn} className='sign-btn doctor-sign-btn'>Register as Doctor</button>
                </div>
                <a onClick={handleLogin} href='/login'>Login here...</a>
            </form>
        </div>
    )
}

export default Signup