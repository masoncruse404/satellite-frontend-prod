//REACT
import React from 'react'

//IMAGES
import  Placeholder  from "../../images/placeholder.jpg"

function Avatar(props) {
  return (
    <div>
        <img 
            className="rounded-pill" 
            height={props.height || "30"} 
            width={props.width || "30"}
            alt="Avatar" 
            src={props.src || Placeholder}
        />
    </div>
  )
}

export default Avatar