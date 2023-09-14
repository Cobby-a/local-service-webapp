
import '../Assets/Stylesheets/Navbar2.css'
import React,{useState} from 'react';
import  {Link} from 'react-router-dom';
import {FiChevronDown } from "react-icons/fi";
import logo from '../Assets/Images/logo_all_mauve.svg'

const Navbar2 = () => {
    const[openProfile, setOpenProfile] = useState(false);
    return(
        <>
        <nav className='navbar'>
            <img src={logo} alt="logo" className="Logo"/>
            <ul className='nav-links'>
                
                
                
                <Link to="/login" className='yourProjects'>
                    <li>Your Projects</li>
                </Link>
                <li className='hibtn' onClick={()=>setOpenProfile((prev)=>!prev)}>Hi, Emma<FiChevronDown /> </li>
            </ul>
        </nav>
        {openProfile && <DropDownProfile/>}
        </>
    )
}
const DropDownProfile =()=>{
    return(
        <div className='flex flex-col dropDownProfile1'>
            <ul className='flex flex-col gap-4'>
                <Link style={{textDecoration:"none"}}><li>My Reviews</li></Link>
                <Link style={{textDecoration:"none"}}><li>Profile</li></Link>
                <Link to="/" style={{textDecoration:"none"}}><li>Logout</li></Link>
            </ul>
        </div>
    )
}

export default Navbar2;