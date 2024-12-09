import React, { useContext } from 'react'
import './DoctorAppointment.css'
import { Context } from '../../context/Context'
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import axios from 'axios'
const apiUrl = process.env.REACT_APP_API_URL;

const DoctorAppointment = () => {
    const { patientAppointDataForDoctor } = useContext(Context)
    const handleClick = (progress, number, loginUsername) => {
        axios.post(`${apiUrl}/_get_progress_data`, { formProgress: progress, number: number, loginUsername: loginUsername })
            .then((res) => {
                if (res.data.formProgress === "Accept") {
                    alert("Appointment Accepted")
                } else if (res.data.formProgress === "Reject") {
                    alert("Appointment Rejected")
                } else if (res.data.formProgress === "Complete") {
                    alert("Appointment Complete")
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    const handleDelete = (_id) => {
        axios.post(`${apiUrl}/delete_appointment_from_doctor`,{_id:_id}).then((res)=>{
          console.log(res,"Success")
        }).catch((err)=>{
          console.log(err)
        })
      }
    return (
        <div className='doctor-appointment-component' >
            <div className='appointment-content'>
                <div className='appointment-heading'>
                    <h2>Doctor Appointment Scheduling!</h2>
                    <p>Through this page, you can easily manage your appointment slots, set your availability, and ensure that your schedule is organized efficiently. Whether you're scheduling patient consultations, follow-ups, or procedures, our system allows you to select convenient times for each. Stay in control of your calendar, optimize patient care, and focus on what matters most — your patients.</p>
                </div>
            </div>
            <div className='appointment-section'>

                { patientAppointDataForDoctor.length===0? <p className='no-appoints'> No Appointments</p> : patientAppointDataForDoctor.map((data) => {
                    return <div className='appointment-card'>
                        <h3>{data.name}</h3>
                        <p>Disease: {data.disease}</p>
                        <p>Contact No: {data.number}</p>
                        <p>Appointment Date and Time: {data.time} {data.date}</p>
                        <p>Message: {data.message}</p>
                        <div className='end-card-item'>
                            <div className='appoint-btn'>
                                <button onClick={() => handleClick("Reject", data.number, data.loginUsername)}>Reject</button>
                                <button onClick={() => handleClick("Accept", data.number, data.loginUsername)}>Accept</button>
                                <button onClick={() => handleClick("Complete", data.number, data.loginUsername)}>Complete</button>
                            </div>
                            <p className='recieved-time'>{data.currentDateSend}</p>
                            <DeleteForeverTwoToneIcon onClick={() => handleDelete(data._id)} className='delete-icon' />
                        </div>
                    </div>
                })}

            </div>


        </div >
    )
}

export default DoctorAppointment