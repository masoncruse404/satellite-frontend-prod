//REACT
import React, {useState, useEffect} from 'react'

//COMPONENTS
import AvatarImg from "../../../../Components/AvatarImg/AvatarImg";

//ICONS
import { FaChevronDown, FaChevronUp} from "react-icons/fa";

//STYLES
import "./CommentComponent.css"

//API
import addReply from '../../../../api/AddReply/AddReply'
import getReply from '../../../../api/GetReply/GetReply';

//UTIL
import removeReplyValue from '../../../../util/RemoveReplyValue';

function CommentComponent(props) {
  const profileID = props.activeProfileId
  const postID = props.post._id
  const [userReply, setUserReply] = useState("")
  const [commentReply, setCommentReply] = useState()
  const [hasReplies, setHasReplies] = useState(false)
  const [replyBool, setReplyBool] = useState(0)
  const [showReply, setShowReply] = useState(false)
  const [replyCounter, setReplyCounter] = useState(0)
  const [commentLength, setCommentLength] = useState(0)
    
  const clickShowSubComment = () => {
    setReplyBool(!replyBool)
  }

  function handleAddReply(e){
    e.preventDefault();
    addReply(profileID, postID, props.username, userReply, props.toggleRegisterModal, getReply, setHasReplies, setReplyCounter, setCommentReply, setReplyBool, replyBool);
    removeReplyValue() 
  }

  function clickShowReply(){
    setShowReply(!showReply)
  }
     
    
  useEffect(() => {
    // request replies from API
    getReply(postID,setHasReplies,setReplyCounter, setCommentReply, props.username,props.toggleRegisterModal,profileID); 
    if(commentReply){
      // response contained replies
      if(commentReply.length){
        var commentLen = commentReply.length
        setCommentLength(commentLen)
      }
    } 
  },[replyCounter,commentReply, props.rerender, props.username])
  
  return (
    <>
    <div className='border sub-comment my-3 shadow-sm overflow-hidden'>
    <div className='d-flex  justify-content-between w-100'>
        
       
        <div className='avatar_con d-flex flex-column align-items-start w-100'>
          <div className='d-flex justify-content-between w-100'>
          <div className='d-flex flex-row'>        
           <div className='mx-3 my-3'>
            <AvatarImg height={45} width={45} />
            </div>
            <div className='mx-1  my-3'>
              <span className='text-dark'>{props.post.author ? props.post.author : props.author} </span><cite title="Source Title"><div className='d-flex justify-content-start align-items-start'><span className='text-secondary'>{props.post.parsedCreatedAt}</span></div></cite>
            </div>
          </div>

          <div>
            <div className='d-flex  w-100  my-3 '>
            <div className={replyBool ? 'comment-reply mx-3 reply-danger text-danger cp' : 'comment-reply mx-3 reply-success text-success cp'} onClick={clickShowSubComment}>{replyBool ? "Cancel Reply" : "Add Reply"}</div>
            
            </div>
          </div>
        </div>
        <div className={replyBool ? 'comment-reply-sm mx-3 text-danger cp' : 'comment-reply-sm mx-3 text-success cp'} onClick={clickShowSubComment}>{replyBool ? "Cancel Reply" : "Add Reply"}</div>
         
          <div className='pre my-3'>
          {props.post.text}
          </div>
          <div className={hasReplies ? 'my-3 cp has-reply-con' : 'd-none'} onClick={clickShowReply}><div className={showReply ? 'text-danger reply-danger' : 'reply-primary link-primary'}><span className='mx-1'>{showReply ? <FaChevronUp /> : <FaChevronDown />} </span><span className='mx-1'>{replyCounter}</span><span>{commentLength > 1 ? 'Replies' : 'Reply'}</span></div></div>
        </div>
         
        
        
    </div>
    <div className={showReply ? 'reply-con' : 'd-none'}>
      {commentReply}
    </div>
    
    
    <div className={replyBool ? "" : "d-none"}>
                
              
    <div className=" mx-3 " >
    <textarea onChange={e => setUserReply(e.target.value)} className="form-control blog-post-reply" id="blog-post-reply" rows="3"></textarea>
    
 
    <button type="button" onClick={e => handleAddReply(e)}
      class=" my-3 btn btn-primary">Add Comment
    </button>
    </div>
    </div>       
   
    </div>
    <div className={showReply ? 'reply-con-mob' : 'd-none'}>
      {commentReply}
    </div>
    </>
  )
}

export default CommentComponent