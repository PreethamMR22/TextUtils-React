import { useState } from "react"
import React from 'react'
import { Link } from "react-router-dom"


export default function Navbar(props) {
 const styleTheme={
  backgroundColor:props.mode==='dark'?'rgba(0, 255, 255, 0.307)':'rgba(40, 40, 40,0.8)',
 }
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid" >
      <a className="navbar-brand" href="#" >{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
       <Link className="nav-link" to="/login">Login</Link>
          </li>
        </ul>

    {/* change theme */}
  
<div className="btn-group  mx-4">
  <button type="button" className="btn changeTheme " style={styleTheme}>Change theme</button>
  <button type="button" className="btn mx-0 changeTheme dropdown-toggle dropdown-toggle-split" style={styleTheme}data-bs-toggle="dropdown" aria-expanded="false">
    <span className="visually-hidden">Toggle Dropdown</span>
  </button>
  <ul className="dropdown-menu">
    <li><a className="dropdown-item" href="#"onClick={()=> {props.toggleTheme('Gradient Purple')}}>Gradient Purple</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=> {props.toggleTheme('Blue')}}>Blue</a></li>
    <li><a className="dropdown-item" href="#" onClick={()=> {props.toggleTheme('Gradient Green')}}>Gradient Green</a></li>
   <hr className="defaultDevider" /> <li className="dropdown-item" onClick={()=> {props.toggleTheme('white')}}>Default</li>
  </ul>
</div>

        {/* //checkbox */}
        <div className="form-check form-switch ">
  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
  <label className={`form-check-label text-${props.mode==='light'?'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enable  { props.mode==='dark'?'light':'dark'} Mode</label>
</div>
      </div>
    </div>



    

  </nav>

    
    
    
    
    
    
    
    
    
    </>
  )
}
