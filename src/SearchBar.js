import React from "react";
import '../src/Assets/Stylesheets/Home.css'
const SearchBar = () =>{
    return(
        <div className="boxContainer">
            <table className='elementsContainer'>
            <tr>
                <td>
                    <input type="text" placeholder='What do you need to be done?' className='searchbox'/>

                </td>
                <td>
                    <input type="text" placeholder='Location' className='location'/>

                </td>
                <td>
                    <a href=""><i className="material-icons search">search</i></a>
                </td>
            </tr>
            </table>
        </div>
    )
}

export default SearchBar;