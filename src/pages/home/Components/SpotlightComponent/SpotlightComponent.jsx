//REACT
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import Skeleton from 'react-loading-skeleton'
//API 
import getBlogs from '../../../../api/GetBlogs/GetBlogs';

//IMAGES
import Tree from '../../../../images/tree.png'
import SpotlightIMG from "../../../../images/machine-learning.jpg"

//STYLES
import "./Spotlight.css";
import 'react-loading-skeleton/dist/skeleton.css'

function SpotlightComponent(props) {
    let navigate = useNavigate()
    const [articles, setArticles] = useState(false)
  
    function handleArticle(e){
        // read more was clicked load requested post
        e.preventDefault()   

        // update url for API request
        navigate("/blog/"+articles[0]._id); 

        // rerender to trigger getBlogs
        props.setRerender(!props.rerender)

        // scroll to post
        window.scrollTo(0,0)
    }
  
    useEffect(() => {
       
       getBlogs(setArticles)
    },[])

  return (

    <div className="spotlight-wrapper">
        <div className="spotlight-component d-flex">
            <div className="spotlight-container">
                <div>             
                            <p className="spotlight-category fw-bolder">{articles[0] ? articles[0].blog_category : null || <Skeleton/>}  {articles[0] ? '/  4 min read' : null || <Skeleton/>}</p>
                            <h3 className="spotlight-title">{articles[0] ? articles[0].title : null || <Skeleton/>} </h3>
                            <p className="spotlight-author fw-bold">{articles[0] ? articles[0].author : null || <Skeleton/>}  <span className='author-date'> &#8226;</span> {articles[0] ? articles[0].parsedCreatedAt : null}</p>
                            <p className="spotlight-content">{articles[0] ? articles[0].content : null || <Skeleton count={5}/>}</p>
                            <button  onClick={e => handleArticle(e)} type="button" className="btn btn-outline-dark">Read More</button>
            </div>
            </div>
   


                    <div className="flower-computer-row d-flex justify-content-center align-items-center">
                        <img className="flower-computer" src={ SpotlightIMG } height={300}  alt="Computer" />   
                    </div>    
                    </div>
                
            </div>
            
     
  );
};

export default SpotlightComponent;