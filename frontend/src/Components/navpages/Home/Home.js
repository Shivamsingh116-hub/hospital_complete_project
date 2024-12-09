import React from 'react'
import './Home.css'
import Footer from '../Footer/Footer'
const Home = () => {
    return (
        <div className='home-container'>
            <div className='welcome-container'>
                <div className='welcome-section'><h1>Wecome to Our Medical Care</h1>
                    <p>Our hospital management software aims to optimize the delivery of healthcare services through efficient management of hospital resources, improving patient care, and ensuring smooth workflows across various departments."</p>
                </div>
            </div>
            <div className='welcome-para'>
                <p>“I am at an age where I just want to be fit and healthy our bodies are our
                    responsibility! So start caring for your body and it will care for you. Eat clean it
                    will care for yout hard.”</p>
            </div>
            <Footer />
        </div>

    )
}

export default Home