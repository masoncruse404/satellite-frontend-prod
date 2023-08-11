import React, {useEffect, useState} from 'react'
import {FaAngleRight, FaAngleDown} from  'react-icons/fa'
/* import "./style.css" */

//UTILS
import getBaseURL from '../../../../util/Constants'
function MobileNavModal(props) {
  const BASE_URL = getBaseURL()
  const [showCategories, setShowCategories] = useState(false)

  function handleCategories(e){
    setShowCategories(!showCategories)
  }
  function gotoPath(e, var_path){
  e.preventDefault();
  const path = BASE_URL + var_path;
  window.location.replace(path);
  }
  function handleRegisterClick(e){
    e.preventDefault();
    props.toggleMobileModal();
    props.toggleRegisterModal();
  }
  function handleLoginClick(e){
    e.preventDefault();
    props.toggleMobileModal();
    props.toggleModal();
  }

  function toogleScroll(){
    if(props.isShowingMobileModal){
      removeScroll();
    }
    if(!props.isShowingMobileModal){
      addScroll();
    }
  }
  function removeScroll(){
    const body = document.querySelector('body');
    body.style.overflow = 'hidden';
    
  }

  function addScroll(){
    const body = document.querySelector('body');
   
  }
  useEffect(() => {
    toogleScroll();
  }, [props.isShowingMobileModal])
  return (
    <div className={props.isShowingMobileModal ? 'mobile-nav  ' : 'd-none'}>
     
        <div className='d-flex mobile-nav-flex flex-column mobile-nav-con '>
            <div 
              onClick={e => handleRegisterClick(e)}
              className='mobile-nav-row'><div className='mobile-nav-text'>Register</div></div>
            <div 
              onClick={e => handleLoginClick(e)}
              className='mobile-nav-row'><div className='mobile-nav-text'>Login</div></div>
            <div 
              onClick={e => gotoPath(e, "blogs")}
              className='mobile-nav-row'><div className='mobile-nav-text'>Feed</div></div>
            <div 
                onClick={e => handleCategories(e)}
                className='mobile-nav-row'><div className='mobile-nav-text'>{showCategories ? <FaAngleDown /> :<FaAngleRight /> } Categories</div>
             </div>   
            <div className={showCategories ? ' d-flex flex-column mobile-nav-categories-con' : 'd-none'}>
                <div 
                  onClick={e => gotoPath(e, "computer-security")}
                  className='mobile-nav-row'><div className='mobile-nav-text-cat'>Computer Security</div></div>
                <div 
                  onClick={e => gotoPath(e, "machine-learning")}
                  className='mobile-nav-row'><div className='mobile-nav-text-cat'>Machine Learning</div></div>
                <div 
                  onClick={e => gotoPath(e, "artificial-intelligence")}
                  className='mobile-nav-row'><div className='mobile-nav-text-cat'>Artificial Intelligence </div></div>
                <div 
                  onClick={e => gotoPath(e, "crypto")}
                  className='mobile-nav-row'><div className='mobile-nav-text-cat'>Crypto Currency </div></div>
                  <div 
                  onClick={e => gotoPath(e, "crypto")}
                  className='mobile-nav-row'><div className='mobile-nav-text-cat'>Crypto Currency </div></div>
                  <div 
                  onClick={e => gotoPath(e, "crypto")}
                  className='mobile-nav-row'><div className='mobile-nav-text-cat'>Crypto Currency </div></div>
            </div>

            
            
        </div>
    </div>
  )
}

export default MobileNavModal