//REACT
import React, { useEffect } from "react";
import {  Link } from "react-router-dom";

//CONTAINERS
import Avatar from "../Avatar/Avatar";

// STYLES
import "./Navbar.css"

//IMAGES
import Rocket from "../../images/rocket.png";

//API
import getUser from "../../api/GetUser/GetUser";

export default function Navbar(props) {

  useEffect(() => {
    getUser(props.setUsername,props.setActiveProfileId)
  },[props.setUsername, props.login])

  return (

    <div className="d-flex justify-content-between border-bottom py-2 navbar-light bg-light shadow-sm">
      <div className="mx-3">
        <a class=" nav-logo-link" href="/"><img height={48} width={48} src={Rocket} alt="rocket" /><span className="nav-logo-text">Satellite</span><span className='text-secondary'></span></a>
      </div>

      <div className="nav-link-con d-flex flex-row justify-content-center align-items-center "> 
        <a className="nav-link-item mx-3" href="/">Home</a>
        <Link to="/blogs" className="nav-link-item mx-3" style={{ textDecoration: 'none' }} >Feed</Link>
      </div>
      
      <div className="mx-3">
        <Avatar isShowingModal={props.isShowingModal} isShowingRegisterModal={props.isShowingRegisterModal} toggleRegisterModal={props.toggleRegisterModal} login={props.login} toggleModal={props.toggleModal} activeProfileId={props.activeProfileId} />      
      </div>
    </div>
  )
}
