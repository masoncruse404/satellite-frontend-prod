//REACT
import { useState } from 'react';
import {  Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineLogin, AiOutlineAccountBook, AiOutlineProfile, AiOutlineFullscreenExit } from "react-icons/ai";
import Cookies from "universal-cookie";

//COMPONENTS
import AvatarImg from "../../Components/AvatarImg/AvatarImg";
import React from 'react'

//STYLES
import "./Avatar.css";


function Avatar(props) {
  const [state, setState] = useState(false);
  const var_login = props.login
 
  const cookies = new Cookies();
  function signOut(e){
      // destroy the cookie
      cookies.remove("token", { path: "/" });
      // redirect user to the landing page
      window.location.href = "/";
  }

  function handleSetSate(){
    setState(!state);
  }

  function handleClick(e) {
    //Toggle user menu
    e.preventDefault();
    handleSetSate();
  }

  function handleToggleClick(e){
    e.preventDefault();

    //Hide login modal - *
    if(props.isShowingModal){
      props.toggleModal();
    }

    //Hide register modal
    if(props.isShowingRegisterModal){
      props.toggleRegisterModal();
    }
    
    //Show login modal
    props.toggleModal()
  }
  
  function handleRegisterToggleClick(e){
    e.preventDefault();
    
    //Hide login modal
    if(props.isShowingModal){
      props.toggleModal();
    }

    //Hide register modal
    if(props.isShowingRegisterModal){
      props.toggleRegisterModal();
    }
     
    //Show register modal
    props.toggleRegisterModal();
    
  }

  return (
    <div onClick={e => handleClick(e)}>
        <div className="d-flex flex-row justify-content-center align-items-center border p-2 rounded-pill header-account">  
            <AiOutlineMenu className="mr-3"/>
            <div className="hidden md:block ">
              <AvatarImg  />
            </div>
        </div>

        {state && (
        <div className="userNav shadow p-3 mb-5 bg-white rounded p-9">
          <div className=" flex flex-col cursor-pointer">
            {var_login ? (
              <>
               <div >
                  <Link to="/profile" style={{ textDecoration: 'none' }}>
                    <span className='margin-fix'><AiOutlineProfile class="link-secondary" size={24}/></span>
                    <span class="link-secondary" >Profile</span>
                  </Link>
                </div>
                <hr />
                <div label="Logout" onClick={(e) => signOut(e)}>
                  <span className='margin-fix'><AiOutlineFullscreenExit size={24}/></span>
                  <span  class="link-secondary">Logout</span>
                </div>
              </>
            ) : (
              <>
                <div label="Login" onClick={e => handleToggleClick(e)}>
                    <span className='margin-fix'><AiOutlineLogin size={24}/></span>
                    <span  class="link-secondary">Login</span>
                </div>
                <hr></hr>
                <div onClick={e => handleRegisterToggleClick(e)} label="Sign up">
                    <span className='margin-fix'><AiOutlineAccountBook size={24}/></span>
                    <span  class="link-secondary">Sign up</span>
                </div>
              </>
            )}
          </div>
        </div>
   
      )}
  </div> 
  )}

export default Avatar;