import React from "react";
import Navbar2 from "./Navbars/Navbar2";
import '../src/Assets/Stylesheets/Mainhome.css'
import SearchBar from './SearchBar'
import { Link } from "react-router-dom";
import Service from "./Services";
import Footer from "./Footer";
const MainHome = ()=>{
    return(
        <React.Fragment>
            <Navbar2/>
            <div className="mainhome">
                <div className="mainhomesub">
                <h1>Welcome back,<br/>Emmanuel</h1>
                <div style={{marginLeft:"-340px"}}><SearchBar/></div>
                <p style={{fontFamily: "Lexend", color:"white"}}>Try searching for a&nbsp;<Link style={{fontFamily:"Lexend", color:"#5CB8E4", textDecoration:"none"}}> Plumber, Cleaner, Caterer or Decorator</Link></p>
                </div>
                <h2>Explore by Category</h2>
                <div style={{marginTop:"28px"}}><Service/></div>
                <div></div>
                <div><Footer/></div>
            </div>
        </React.Fragment>
    )
}

export default MainHome;