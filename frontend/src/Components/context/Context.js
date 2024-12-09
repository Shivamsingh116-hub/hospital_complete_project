import React, { createContext, useState } from 'react'
export const Context = createContext()
export const ContextProvider = ({ children }) => {
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [loginUsername, setLoginUsername] = useState('')
    const [whoLogin, setWhoLogin] = useState("NoLogin")
    const [doctorsData, setDoctorData] = useState([])
    const [doctorName, setDoctorName] = useState('')
    const [patientAppointDataForDoctor, setpatientAppointDataForDoctor] = useState([])
    const[patientAppointDataCome,setpatientAppointDataCome]=useState([])
    const [drAppointUsername, setDrAppointUsername] = useState('')
    const contextData = {
        password, setPassword, username,
        setUsername, whoLogin, setWhoLogin, loginUsername,
        setLoginUsername, doctorsData, setDoctorData, doctorName
        , setDoctorName, drAppointUsername, setDrAppointUsername,
        patientAppointDataForDoctor, setpatientAppointDataForDoctor,
        patientAppointDataCome,setpatientAppointDataCome
    }
    return (
        <Context.Provider value={contextData}>
            {children}
        </Context.Provider>
    )
}
