import React, {useEffect, useState} from 'react'

import CommentComponent from './CommentComponent/CommentComponent';
//ICONS
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai";

function Comment(props) {

  var listItems = 0;

  useEffect(() => {
   
  },[props.commentsArray, props.addedComment, props.rerender])
   
  listItems = props.commentsArray.map((comment) => 
    <CommentComponent rerender={props.rerender} username={props.username} toggleRegisterModal={props.toggleRegisterModal} activeProfileId={props.activeProfileId} key={comment._id} post={comment} />
  );

  return(
    <div className='sub-comments bg-gray'>
      {listItems ? listItems : null}
    </div>

  );
}



export default Comment