import React, { useContext, useEffect, useState } from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import care from './1600w-oz1ox2GedbU.jpg'
import { Context } from './context/Context'
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const navigate = useNavigate()
    const [loginBtnName, setLoginBtnName] = useState(true)
    const { whoLogin } = useContext(Context)
    const [btnClick, setBtnClick] = useState(false)

    const handleClick = () => {
        if (btnClick) {
            navigate('/')
            setBtnClick(!btnClick)
        } else {
            navigate('/login')
            setBtnClick(!btnClick)
        }
    }

    const [navItems, setNavItems] = useState([])

    const updateNavItems = (role) => {
        let items = []
        switch (role) {
            case "patientLogin":
                items = [
                    { "navList": "Appointment", "path": "/patient_appointment" },
                    { "navList": "Doctors", "path": "/patient_doctors_section" },
                    { "navList": "Billing", "path": "/billing" },
                    { "navList": "Contact Us", "path": "/contact" }
                ]
                setLoginBtnName(false)
                break
            case "doctorLogin":
                items = [
                    { "navList": "Appointments", "path": "/doctor_appointment" },
                    { "navList": "Contact Us", "path": "/contact" } // Fixed path typo (from /billing to /cruing)
                ]
                setLoginBtnName(false)
                break
            case "noLogin":
                items = []
                setLoginBtnName(true)
                break
            default:
                items = [] // No nav items for other roles
        }
        setNavItems(items)
    }
    const [className, setClassname] = useState("inactive")
    const [isActive, setIsActive] = useState(false)
    const handleClickMenu = () => {
        setClassname(className === "inactive" ? "active" : "inactive")
        console.log(className)
        setIsActive(!isActive)

    }
    useEffect(() => {
        updateNavItems(whoLogin) // Update nav items based on whoLogin
    }, [whoLogin])
    return (
        <div className='navbar'>
            <img src={care} alt='*' />
            <ul className={`nav-item ${className}`}>
                <li><Link onClick={()=>setClassname("inactive")} className='navComponent' to='/'>Home</Link></li>
                <li><Link onClick={()=>setClassname("inactive")}  className='navComponent' to='/about'>About</Link></li>
                <li><Link onClick={()=>setClassname("inactive")}  className='navComponent' to='/disease'>Treatment Avail</Link></li>
                {btnClick ? loginBtnName ? '' : navItems.map((item, index) => {
                    return (<li key={index}><Link onClick={()=>setClassname("inactive")}  className='navComponent' to={item.path}>{item.navList}</Link></li>)
                }) : ""}
            </ul>
            <div className='left-item'>
                <div className='menu-icon'>
                    <MenuIcon onClick={handleClickMenu} />
                </div>
                <button onClick={handleClick} className='loginButton'>{btnClick ? loginBtnName ? "LogIn" : "LogOut" : "LogIn"}</button>
            </div>
        </div>
    )
}

export default Navbar