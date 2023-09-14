import React from "react";
import Navbar2 from "./Navbars/Navbar2";
// import SearchBar from "./SearchBar";
import Footer from "./Footer";
import Service from "./Services";
import '../src/Assets/Stylesheets/ServiceSearch.css'
const ServicePage = () => {
    return(
        <React.Fragment>
            <Navbar2/>
            <p style={{fontWeight: "bold", color: "#1D2254", fontSize: "48px", marginLeft:"220px", marginBottom:"6px", marginTop:"20px"}}>Treat yourself to any service<br/>of your choice.</p>
            <div>
                <SearchBar/>
            </div>
            <div>
                <Service/>
                <Service/>
            </div>
            <div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
const SearchBar = () =>{
    return(
        <div className="boxContainer1">
            <table className='elementsContainer1'>
            <tr>
                <td>
                    <input type="text" placeholder='What do you need to be done?' className='searchbox1'/>

                </td>
                <td>
                    <input type="text" placeholder='Location' className='location1'/>

                </td>
                <td>
                    <a href=""><i className="material-icons search1">search</i></a>
                </td>
            </tr>
            </table>
        </div>
    )
}

export default ServicePage;