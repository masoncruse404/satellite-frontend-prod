//REACT
import React from 'react'
import Skeleton from 'react-loading-skeleton'

//IMAGES
import PlaceholderImage from "../../../../images/placeholder.jpg"

//ICONS
import { FaRegBookmark } from "react-icons/fa6";

//STYLES
import "./BlogCarouselComponent.css"
import 'react-loading-skeleton/dist/skeleton.css'

function BlogCarouselComponent({image, title, id, author, date, selectedID, handleClickCarousel}) {
  
 

  return (
    <div key={id} id={id} className={ "shadow-sm my-3 mx-3 " + (selectedID === id ? "active-card overflow-x-hidden" : "inactive-card overflow-x-hidden") } onClick={(e) => handleClickCarousel(e,id)}>
        <div>
            <img className='w-100' src={image} height={200}/>
        </div>
        <div className='container my-3'>
            <div className='card-title'><span className='card-title-text'>{title || <Skeleton/>}</span></div>
            <div className='d-flex justify-content-between my-3'>
                <div className='d-flex flex-row'>
                    <div className='placeholder-con'><img  className="rounded-pill"  src={PlaceholderImage} height={48} width={48} /></div>
                    <div>
                        <div><span className='card-author-text'>{author || <Skeleton/>}</span></div>
                        <div><span className='card-date-text'>{date || <Skeleton/>}</span> / <span className='card-time-text'>{date ? '9 min read' : null || <Skeleton/>}</span></div>
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

export default BlogCarouselComponent