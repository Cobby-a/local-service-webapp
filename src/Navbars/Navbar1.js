
import '../Assets/Stylesheets/Navbar1.css'
import React,{useState} from 'react';
import  {Link} from 'react-router-dom';
import {FiChevronDown } from "react-icons/fi";
import logo from '../Assets/Images/logo_all_white 2.svg'

const Navbar1 = () => {
    const[openProfile, setOpenProfile] = useState(false);
    return(
        <>
        <nav className='navbar'>
            <img src={logo} alt="logo" className="Logo"/>
            <ul className='nav-links'>
                
                <li className='servicesbtn' onClick={()=>setOpenProfile((prev)=>!prev)}>Services <FiChevronDown /> </li>
                
                <Link to="/login" className='login'>
                    <li>Login</li>
                </Link>
                <Link to="/signup" className='signup'>
                    <li>SignUp</li>
                </Link>
            </ul>
        </nav>
        {openProfile && <DropDownProfile/>}
        </>
    )
}
const DropDownProfile =()=>{
    return(
        <div className='flex flex-col dropDownProfile'>
            <ul className='flex flex-col gap-4'>
                <li><Link to="/all-services" style={{textDecoration:"none"}}>All Services</Link></li>
                <li><Link to="/top-reviews" style={{textDecoration:"none"}}>Top Reviews</Link></li>
            </ul>
        </div>
    )
}

export default Navbar1;