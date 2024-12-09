import React from 'react'
import './Contact.css'
import cardHeadIcon from './OIP.jpg'
import WifiCalling3OutlinedIcon from '@mui/icons-material/WifiCalling3Outlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import FeedbackQuerySwitch from './FeedbackQuerrySwitch';
const Contact = () => {
    return (
        <>
            <div className='mainContainer'>
                <div className='contactContainer'>
                    <div className='contactHeading'>
                        <h1>Contact Us</h1>
                        <p>For any type of querries</p>
                    </div>
                    <div className='contactCard'>
                        <div className='cardHead'>
                            <img src={cardHeadIcon} className='cardHeadIcon' alt='healthcare' />
                            <h3>Wellcure HealthCare Ltd...</h3>
                        </div>
                        <div className='cardDetail'>
                            <div className='cardItems'>
                                <div className='cardItemIcon'> <LocationOnOutlinedIcon /></div>
                                <p>Queen's Way Maidan, Kolkata, West Bengal- 700071, India</p>
                            </div>
                            <div className='cardItems'>
                                <div className='cardItemIcon'> <WifiCalling3OutlinedIcon /></div>
                                <p>For Appointment Related querries -9996719321</p>
                            </div>
                            <div className='cardItems'>
                                <div className='cardItemIcon'> <LocalPrintshopOutlinedIcon /></div>
                                <p>Corporate Office - +91-124 4921021/ +91-124 492 1041</p>
                            </div>
                            <div className='cardItems'>
                                <div className='cardItemIcon emailIcon'> <EmailOutlinedIcon /></div>
                                <div className='cardItemEmails'>
                                    <div className='cardItemEmails1'>
                                        <p>For feedback/complaints please write to:</p>
                                        <p className='para'><a href="https://mail.google.com">feedback@wellcurehealthcare.com</a></p>
                                    </div>
                                    <div className='cardItemEmails1'>
                                        <p>For general/business related queries contact:</p>
                                        <p className='para'><a href="https://mail.google.com">querry@wellcurehealthcare.com</a></p>
                                    </div>
                                    <div className='cardItemEmails1'>
                                        <p>For investors related queries contact:</p>
                                        <p className='para'><a href="https://mail.google.com">investors@wellcurehealthcare.com</a></p>
                                    </div>
                                    <div className='cardItemEmails1'>
                                        <p>For international patient queries contact:</p>
                                        <p className='para'><a href="https://mail.google.com">patient@wellcurehealthcare.com</a>9</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='feedbackQuerryCard'>
                        <h1>Get in Touch</h1>
                        <FeedbackQuerySwitch />
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact