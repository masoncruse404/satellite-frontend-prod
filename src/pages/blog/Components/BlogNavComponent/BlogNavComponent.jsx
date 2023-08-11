//REACT
import React, { useEffect } from 'react'
import {  Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

//STYLES
import "./BlogNavComponent.css"

function BlogNavComponent(props) {
  let location = useLocation()


  useEffect(() => {
    
  },[location.key])
  return (
    <div className="container border-top border-bottom py-2 mb-2 mt-60 border-bottom shadow-sm">
  <div className="row d-flex justify-content-between">
    
    <div className="col">
     <div className="text-primary blog-nav-link">
        <Link  to="/machine-learning" className="text-decoration-none">
                <span>Machine Learning</span>
            </Link>
     </div>
    </div>
    
   
    <div className="col">
      <div className="text-primary blog-nav-link"> <Link  to="/fitness" className="text-decoration-none">
                <span>Fitness</span>
            </Link></div>
    </div>

    <div className="col">
      <div className="text-primary blog-nav-link "> <Link to="/crypto"  className="text-decoration-none">
                <span>Crypto</span>
            </Link></div>
    </div>

    <div className="col">
      <div className="text-primary blog-nav-link d-flex"><Link to="/computer-security" className="text-decoration-none">
                <span>Computer Security</span>
            </Link></div>
    </div>
   
    <div className="col  d-sm-none d-none d-md-block t1">
      <div className="text-primary blog-nav-link"> <Link to="/current-events" className="text-decoration-none">
                <span>Current Events</span>
            </Link></div>
    </div>
    <div className="col d-none">
      <div className="text-primary blog-nav-link"> <Link to="/artificial-intelligence" className="text-decoration-none">
                <span>Artificial Intelligence</span>
                </Link></div>
    </div>
  </div>
</div>
   
  )
}

export default BlogNavComponent