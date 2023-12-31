import React from "react";
import logo from '../src/Assets/Images/allblacklogo.svg';
import logo1 from '../src/Assets/Images/mauve - hand logo.svg';
import '../src/Assets/Stylesheets/SignUp.css'
import { Link } from "react-router-dom";
const Login =()=>{
    return(
        <React.Fragment>
            <section className="signup-section">
                <div className="signup-sub">
                <img src={logo1} alt="logo" style={{margin: "auto auto auto", textAlign:"center"}}/>
                <p style={{fontWeight: "bold", color: "#1D2254", fontSize: "36px", textAlign:"center", marginBottom:"6px", marginTop:"20px"}}>Welcome To ConnectLocal</p>
                <p style={{ color: "#1D2254", fontSize: "24px", textAlign:"center", marginBottom:"20px"}}>Let's get you signed in.</p>
                </div>
                <div className="Input">
                    <input type="text" placeholder="Email or Phone Number" className="username"/>
                    <input type="password" placeholder="Password" className="password"/>
                </div>
                <p><Link to="/#" style={{fontFamily:"Lexend", color:"#5CB8E4", textDecoration:"none", textAlign:"center", marginLeft:"55px"}}>Forgot Password?</Link></p>
                <Link to = "/home"><button className="signup-btn">Sign In</button></Link>
                <hr style={{border: "none",
        height: "1.5px",
        background: "#d9d9d9",
        marginTop: "16px",
        marginLeft: "56px",
        width: "440px",
        textAlign: "center",
        position: "relative",
        marginBottom: "12px",}}/>
            <p style={{textAlign:"center", width: "440px", fontFamily: "Montserrat"}}>New to ConnectLocal? &nbsp; <Link to="/signup" style={{fontFamily:"Lexend", color:"#5CB8E4", textDecoration:"none"}}>Create an account</Link></p>
            <p style={{textAlign:"center", marginTop: "64px",fontFamily: "Montserrat"}}>For further support, visit our help center or contact our <br/>customer service team.</p>
            <img src={logo} alt="logo" style={{margin: "56px auto 0 120px", textAlign:"center"}}/>
            </section>
        </React.Fragment>
    )
}

export default Login;