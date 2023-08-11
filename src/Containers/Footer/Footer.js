
//REACT
import React, { useEffect, useState, useRef } from 'react'
import { useNavigate } from "react-router-dom";

//ICONS
import { FaFacebook, FaTwitter, FaGithub, FaSatellite} from "react-icons/fa";
import { faCheck,faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//STYLES
import "./footer.css";

//API
import handleSearchFooter from '../../api/HandleSearchFooter/HandleSearchFooter';

export default function Footer(props) {
  let navigate = useNavigate()
  const [searchPostFooter, setSearchPostFooter] = useState("")
  const [errorMSGSearch, setErrorMSGSearch] = useState("No search results found")
  const refSearch = useRef(null);
  const refError = useRef(null);

  function handleClickSearch(e){
    e.preventDefault()
    handleSearchFooter(searchPostFooter, refError.current, navigate, props.setRerender, props.rerender)
  }
 
  const resetValidationSearch = (element ,error) => {
    var searchIn = error
    searchIn.classList.remove('valid')
    searchIn.classList.remove('invalid')
  }

  function onChangeSearch(element, error){
    resetValidationSearch(element, error);
  }

  function handleLogoClick(e){
    e.preventDefault()
    navigate('/')
  }

  useEffect(() => {
    const elementSearch = refSearch.current
    const elementError = refError.current
    onChangeSearch(elementSearch, elementError)
  })

  return (
<> 

  <div className=' footer_con h-100'>
    <div className='row footer-row'>
      <div class="col-12 col-md-6 col-lg-3">
        <div className='d-flex flex-column justify-content-center align-items-start footer-company-info'>
          <div className='footer-company-info-item cp' onClick={e => handleLogoClick(e)}><FaSatellite size={33} /><span className='footer-logo-text mx-3'>Satellite</span></div>
          <div className='footer-company-info-item'>Satellite</div>
          <div className='footer-company-info-item'>95 Summer St</div>
          <div className='footer-company-info-item'>Houston, TX 77333</div>
          <div className='footer-company-info-item'>Speak with sales: (281)333-4040</div>
          <div className='d-flex flex-row mt-3'>
                <div><a className='text-decoration-none mx-1' href='/'><FaFacebook size={40} /></a></div>
                <div><a className='text-decoration-none mx-1' href='/'><FaTwitter size={40} /></a></div>
                <div><a className='text-decoration-none mx-1' href='/'><FaGithub size={40} /></a></div>
                <div><a className='text-decoration-none mx-1' href='/'><FaFacebook size={40} /></a></div>
          </div>
          <div className='footer-status-con'>
            <div>Status: All Systems Operational</div>
          </div>
        </div>
      </div>
        <div class="col-12 col-md-6 col-lg-3">
          <div className='d-flex flex-column footer-link-col'>
            <div className='footer-link-header'>Product</div>
            <div className='d-flex flex-column'>
              <div className='footer-link-col-item'>Pricing</div>
              <div className='footer-link-col-item'>Customers</div>
              <div className='footer-link-col-item'>Docs</div>
              <div className='footer-link-col-item'>Blog</div>
              <div className='footer-link-col-item'>Request a Demo</div>
              <div className='footer-link-col-item'>Contact Us</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3">
        <div className='d-flex flex-column footer-link-col'>
            <div className='footer-link-header'>Company</div>
            <div className='d-flex flex-column'>
              <div className='footer-link-col-item'>About</div>
              <div className='footer-link-col-item'>Careers</div>
              <div className='footer-link-col-item'>Privacy</div>
              <div className='footer-link-col-item'>Terms and Conditions</div>
              <div className='footer-link-col-item'>Acceptable Use</div>
              <div className='footer-link-col-item'>Open Source</div>
            </div>
          </div>
        </div>
        <div class="col-12 col-md-6 col-lg-3"><div className='d-flex flex-column footer-link-col'>
            <div className='footer-link-header'>Support</div>
            <div className='d-flex flex-column'>
              <div className='footer-link-col-item'>Chat</div>
              <div className='footer-link-col-item'>Email</div>
              <div className='footer-link-col-item'>Sign up</div>
              <div className='footer-link-col-item'>Login</div>
            </div>
          </div></div>
        
        

    </div>
    <div className='row footer-search-row '>
                   
      <div>
        <div className='d-flex flex-column footer-search-con  '>
          <div className='footer-search-slogan'>Get the freshest Satellite news</div>    
          <div className='d-flex flex-row footer-search-wrap'>    
            <input  ref={refSearch} value={searchPostFooter} onChange={e => setSearchPostFooter(e.target.value)}
            type="text"  className='footer-search-input' placeholder="Search by title" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div  className='footer-search-btn' onClick={e => handleClickSearch(e)}><FontAwesomeIcon icon={faMagnifyingGlass} size={40}/></div>
            
                    
          </div>
          <div className='form-item-search-footer'>
            <div ref={refError} className='form-input-search-footer invalid'></div>
            <i class="valid-icon">
              <FontAwesomeIcon icon={faCheck} />
            </i>
      
            <div class="invalid-item">
              <p class="error-msg p-3">{errorMSGSearch}</p>
            </div>
            <div class="valid-item">
              <p class="msg"></p>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className='row py-3'>
      <div className='footer-cpy d-flex justify-content-center align-items-center'>
         <div>Copyright ©2023 Satellite. All rights reserved.</div>
      </div>
    </div>
  </div>
  
 
</>
)

}
