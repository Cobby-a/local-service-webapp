import React from "react"
import '../src/Assets/Stylesheets/Home.css'
import car from '../src/Assets/Images/car.svg';
import plumbing from '../src/Assets/Images/plumber.svg';
import catetring from '../src/Assets/Images/catering.svg';
import events from '../src/Assets/Images/event.svg';
import fitness from '../src/Assets/Images/fitness.svg';
import cleaning from '../src/Assets/Images/cleaning.svg';
import child from '../src/Assets/Images/child.svg';
import home from '../src/Assets/Images/home.svg';
const Service = () => {
    return(
        <div className='services'>
        <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={car} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Car maintenance</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={plumbing} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Plumbing services</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={cleaning} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Cleaning services</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={events} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Event decoration</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={catetring} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Catering services</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={home} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Home repairs</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={child} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Child care</p>
                </div>
            </div>
            <div className='service'>
                <div style={{margin: "60px auto", textAlign:"center"}}>
                    <img src={fitness} alt="car" />
                    <p style={{fontFamily: "Montserrat"}}>Fitness and Wellness</p>
                </div>
            </div>
            </div>
    )
}

export default Service;