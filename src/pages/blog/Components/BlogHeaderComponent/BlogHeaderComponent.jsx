//REACT
import React from 'react'

//STYLES
import "./BlogHeaderComponent.css"
function BlogHeaderComponent() {
  return (
    <div className="blog-header">
        <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="blog-header-text display-3">Resources for <span className=" blog-header-text font-weight-bold">Humans</span></div>
            <div className='blog-header-text'>LATTICE RESOURCES FOR HUMANS MAGAZINE</div>
        </div>
    </div>
  )
}

export default BlogHeaderComponent