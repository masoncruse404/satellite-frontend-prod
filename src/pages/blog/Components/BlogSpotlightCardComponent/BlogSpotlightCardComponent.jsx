//REACT
import React from 'react'
import { LazyLoadImage } from "react-lazy-load-image-component";

//IMAGES
import PlaceholderImage from "../../../../images/placeholder.jpg"
import Placeholder from '../../../../images/jk-placeholder-image.jpg'
//ICONS
import { FaRegBookmark } from "react-icons/fa6";

//STYLES
import "./BlogSpotlightCardComponent.css"

function BlogSpotlightCardComponent({image, title, id, onChange, selectedID, author, date}) {
   
    const handleClick = (e,keyID) => {
        //update selectedID
        e.preventDefault()
        onChange(keyID); 
    }
  return (
    <div key={id} id={id} className={ "shadow-sm my-3 mx-3 " + (selectedID === id ? "active-card overflow-x-hidden" : "inactive-card overflow-x-hidden") } onClick={(e) => handleClick(e,id)}>
        <div>
        <LazyLoadImage className='spotlight-card-img' height={200} src={ image|| Placeholder}  visibleByDefault={image === Placeholder} alt="blog"  effect="blur" />
        </div>
        <div className='container my-3'>
            <div className='card-title'><span className='card-title-text'>{title}</span></div>
            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex flex-row'>
                    <div className='placeholder-con'><img  className="rounded-pill"  src={PlaceholderImage} height={48} width={48} /></div>
                    <div>
                        <div><span className='card-author-text'>{author}</span></div>
                        <div><span className='card-date-text'>{date}</span> / <span className='card-time-text'>9 min read</span></div>
                    </div>
                </div>
                <div>
                    <FaRegBookmark size={23} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default BlogSpotlightCardComponent 