
import React, { useState, useEffect, useRef } from 'react'

import {  faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Cookies from "universal-cookie";
import {  AiOutlineClose } from "react-icons/ai";
import Rocket from "../../images/rocket.png";



//STYLES
import './modal.css';

//UTILS
import getBaseURL from '../../util/Constants';

//API
import handleRegister from '../../api/HandleRegister/HandleRegister';

const RegisterModal = (props) => {
  const BASE_URL = getBaseURL()
  const cookies = new Cookies();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMSG, setErrorMSG] = useState("Please enter a valid email")
  const [errorMSGPassword, setErrorMSGPassword] = useState("Password must be > 3 characters")
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const ref = useRef(null);
  const refPassword = useRef(null);

  


  
  function handleModalClose(e){
    e.preventDefault();
    props.toggleRegisterModal();
   
  }

  function handleRegisterClick(e){
    e.preventDefault();
    props.toggleModal();
    props.toggleRegisterModal();
  
    
  }
 
  //Email Validation
  const resetValidation = (element) => {
    var emailIn = element
    emailIn.classList.remove('valid')
    emailIn.classList.remove('invalid')
  }
  function onChangeEmail(element){
    setErrorMSG("Please enter a valid email")
    var emailIn = element
    resetValidation(element);
    var emailValue = email;


    if(!emailValue){
        return;
    }

    var reg = /\S+@\S+\.\S+/;
    const validationValue = reg.test(emailValue)

    if (validationValue){
        emailIn.classList.add('valid')
        setIsEmailValid(true)
    }else{
        emailIn.classList.add('invalid')
        setIsEmailValid(false)
    }

  }

  //Password Validation
  const resetValidationPassword = () => {
    var passwordIn = refPassword.current
    passwordIn.classList.remove('valid')
    passwordIn.classList.remove('invalid')
  }

  function onChangePassword(element){ 
    var passwordIn = element
    resetValidationPassword(element);
    var passwordValue = password;
   
  
    if(!passwordValue){
        return;
    }

    //check if password is greater than 3 and less than 14
    if (passwordValue.length < 4){
        passwordIn.classList.add('invalid')
        setErrorMSGPassword("Password must be > 3 characters")
        setIsPasswordValid(false)
    }

    if (passwordValue.length > 13){
        passwordIn.classList.add('invalid')
        setErrorMSGPassword("Password must be < 14 characterss")
        setIsPasswordValid(false)
    }

    if (passwordValue.length > 3 && passwordValue.length < 13)
    {
        passwordIn.classList.add('valid')
        setIsPasswordValid(true)
    }

  }


  function  handleSubmit(e){
    e.preventDefault();
    handleRegister(props.toggleRegisterModal, props.toggleModal,isPasswordValid,isEmailValid, setErrorMSG,ref.current, email, password);
  }

  useEffect(() => { 
    const element = ref.current;
    const elementPassword = refPassword.current;
    onChangeEmail(element);
    onChangePassword(elementPassword)
  }, [props.isShowingMobileModa, props.isShowingModal, email, password])
  
  return (
   
    <div className={props.isShowingRegisterModal ? "modal-container  mx-w-100 d-flex justify-content-center align-items-center " : "d-none" }>
      <section  className=' modal-con-desk mx-w-100 border opacity-100 bg-white rounded'>
        <div className='bg-white h-100'>
        <div className="w-100 modal-login-con d-flex flex-row mb-3 justifiy-content-between align-items-center border-bottom border ">
          <div className='m-1 w-100 d-flex flex-row align-items'><img  className='modal-logo' src={Rocket} height={50} width={50} /><div className='d-flex justify-content-center align-items-center'><h3 className='modal-logo-text'>Register</h3></div></div>
          <div className='m-1' onClick={(e) => {handleModalClose(e)}} ><span><AiOutlineClose size={24} /></span></div>
        </div>
        <div className='modal-text m-3 '><h3>L.P.E Technologies</h3></div>
        <div className='modal-text m-3'><p className='lead'>ChatGPT powered blog</p></div>
        <div className='m-3 form-item'>
    
          <input 
          id="InputEmailLogin"
        
          value={email}
          ref={ref}
          onChange={(e) => setEmail(e.target.value)} className='modal-input modal-input-mob border border rounded my-3 p-3 ' 
          type="email" class=" form-input"  aria-describedby="emailHelpLogin" placeholder="Enter email">
          </input>
                     <i class="valid-icon">
                          <FontAwesomeIcon icon={faCheck} />
                      </i>
          
                    <div class="invalid-item">
                        <p class="error-msg p-3">{errorMSG}</p>
                    </div>
                    <div class="valid-item">
                        <p class="msg"></p>
                    </div>
        </div>
        <div className='m-3 form-item'>
        <input 
          id="InputPasswordLogin"
          ref={refPassword}
          value={password}
          onChange={(e) => setPassword(e.target.value)} className='modal-input modal-input-mob border border rounded my-3 p-3 w-100' 
          type="password" class="form-input"  aria-describedby="passwordHelpLogin" placeholder="Enter password">
          </input>
         
                       <i class="valid-icon">
                          <FontAwesomeIcon icon={faCheck} />
                      </i>
          
                    <div class="invalid-item">
                        <p class="error-msg p-3">{errorMSGPassword}</p>
                    </div>
                    <div class="valid-item">
                        <p class="msg"></p>
                    </div>

        </div>
          <div className='modal-btn-con d-none'>
            
          <div className='next-auth-container d-none'>
            <div className='d-flex flex-row border m-3 lg-rounded p-3 rounded'>
              <div><span>G</span></div>
              <div className='justify-content-center'><span>Continue with Google</span></div>
            </div>
            <div className='d-flex flex-row border m-3 p-3 rounded'>
              <div><span>G</span></div>
              <div className='justify-content-center'><span>Continue with Google</span></div>
            </div>
          </div>
       
       
      
        
        </div>
        <div 
            
            className=' modal-handle-login-con  d-flex justify-content-center'>
              
              
            
            <div className='modal-cont-con d-flex w-100 flex-column justify-content-center align-items-center  '>
                <div 
                  onClick={e => handleSubmit(e)}
                  id="continue-btn"
                  className=' d-flex flex-row justify-content-center align-items-center modal-continue-btn border border-primary  btn btn-primary w-100 mr-3'>
                    <div className='modal-continue-text'><span>Continue</span></div>
                </div>
                
               
              <div className='w-100 d-flex align-items-center justify-content-center flex-row border-top mt-2'>
             
                <div 
                  onClick={e => handleRegisterClick(e)}
                  className='c-pointer mt-3 mb-1 '>
                    <span>Already have an account?</span>
                </div>
                <div 
                  onClick={e => handleRegisterClick(e)}
                  className='c-pointer mt-3 mb-1 handle-register-text'>
                    <span> Login</span>
                </div>
              </div>
            </div>
        </div>
        </div>
        
      </section>
    
        
    </div>

  );
};

export default RegisterModal;