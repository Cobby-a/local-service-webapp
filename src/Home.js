import React from 'react';
import '../src/Assets/Stylesheets/Home.css';
import background from '../src/Assets/Images/for_home.png'
import activitylogo from '../src/Assets/Images/activitylogo.svg'
import activityimg from '../src/Assets/Images/activityimg.svg'
import stars from '../src/Assets/Images/rating stars.svg'
import Navbar1 from './Navbars/Navbar1'
import {FiChevronDown } from "react-icons/fi";
import Footer from './Footer';
import SearchBar from './SearchBar';
import Service from './Services';
const Home = () => {
    return(
        <React.Fragment>
            <div style={{backgroundImage : `url(${background})`,
            width: "100%",
            height: "672px",
            paddingTop: "8px",
            }}>
                <Navbar1/>
                <h1 className='nav1h1'>The best local service <br/>provider platform you will<br/>ever get</h1>
                <SearchBar/>
                <div className='headP'>
                <p className="headp1">ConnectLocal, a service provider app</p>
                <p className="headp2">which gives you access to numerous local services.</p>
                </div>
            </div>
            <h2 className='h2'>Most Popuplar Activities</h2>
            
            <div className="activities">
                <Activity/>
                <Activity/>
                <Activity/>
                <Activity/>
                <Activity/>
                <Activity/>
                <Activity/>
                <Activity/>
                <Activity/>
            </div>

            <p style={{color:"#5CB8E4", fontWeight:"bold", textAlign:"center"}}><span style={{marginTop:"4px"}}><FiChevronDown /></span> Show more activities</p>
            <hr style={{border: "none",
        height: "2px",
        background: "#d9d9d9",
        marginTop: "140px",
        marginBottom: "56px",}}/>
        <h2 style={{
        marginBottom: "56px",}}>Available Service Types</h2>
        <Service/>
        <Footer/>
        </React.Fragment>
    )
}


const Activity = ()=>{
    return(
        <div className='activity'>
        <div className='activities1'>
            <ul className='activities1link'>
                <li><img src={activitylogo} alt="" /></li>
                <li id="last">
                    <p style={{fontWeight:"600", fontFamily: "Montserrat"}}>His Him Cleaning Service</p>
                    <p style={{fontFamily: "Montserrat"}}>ACP Junction, Kwabenya</p>
                </li>
            </ul>
        </div>
        <div className='activities2'>
            <img src={activityimg} alt="servicelogo" style={{width:'100%', height:"100%"}}/>
        </div>
        <div className='activities3'>
            <p style={{fontFamily: "Montserrat"}}>
            Category: <span style={{fontWeight:"600", fontFamily: "Montserrat"}}>Cleaning Service</span>
            </p>
            <p style={{fontFamily: "Montserrat"}}>
                Rating: <span style={{fontWeight:"600", color:"#5CB8E4", fontFamily: "Montserrat"}}>4.5</span><img src={stars} alt="stars" style={{marginTop:"4px", paddingLeft:"4px"}} />
            </p>
        </div>
    </div>
    )
}

export default Home;