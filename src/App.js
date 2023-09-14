import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Home from './Home';
import SignUp from "./SignUp";
import MainHome from "./MainHome";
import ServicePage from "./ServicesPage";
const App = () =>{
  return(
    <BrowserRouter>
      <Routes>
        <Route exact path = "/" element = {<Home/>}/>
        <Route exact path = "/signup" element = {<SignUp/>}/>
        <Route exact path = "/login" element = {<Login/>}/>
        <Route exact path = "/home" element = {<MainHome/>}/>
        <Route exact path = "/all-services" element = {<ServicePage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;