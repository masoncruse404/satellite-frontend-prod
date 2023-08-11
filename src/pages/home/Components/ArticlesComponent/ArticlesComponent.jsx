//REACT
import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'

//STYLES
import 'react-loading-skeleton/dist/skeleton.css'
import "./ArticlesComponent.css"

export default function ArticlesComponent({img_src, size, category, title, content, read_time, author, post_date, idx, varSetRerender,varRerender})
{
  let navigate = useNavigate();

  function handleArticle(e){
    e.preventDefault()
    // update url for API request
    navigate("/blog/"+idx);

    // rerender page to get request post
    varSetRerender(!varRerender)

    // scroll to post
    window.scrollTo(0,0)
  }


  return (
    <div className="article-wrapper">
        <div className="article">
            <div className="article-image mb-2 d-flex justify-content-center align-items-center">
                <img src={ img_src } className='article-img' alt="Building" height={ size } width={ 300 }/>
            </div>
            <div className="article-text-container">
            <div className="article-category fw-bolder text-secondary"><span>{category || <Skeleton />}</span><span> {read_time}</span></div>
            <div className="article-title">{title || <Skeleton />}</div>
            <div className="article-author fw-bolder"><span>{author || <Skeleton />} <span className='author-date'> &#8226;</span> </span><span> {post_date || <Skeleton />}</span></div>
            <div className="article-content  overflow-hidden"><div>{content || <Skeleton count={10}/>}</div></div>
            <button 
              onClick={e => handleArticle(e)}
              type="button" className=" article-btn btn btn-outline-dark">Read More</button>
            </div>
        </div>
    </div>
  );
};

