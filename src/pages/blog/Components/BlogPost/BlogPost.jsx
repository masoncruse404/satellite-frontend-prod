
//REACT
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useLocation } from "react-router-dom";
import Skeleton from 'react-loading-skeleton'

//ICONS
import * as AiIcons from "react-icons/ai";
import { FaChevronDown, FaChevronUp} from "react-icons/fa";

//STYLES
import "./BlogPost.css"
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-loading-skeleton/dist/skeleton.css'

//COMPONENTS
import Comment from "../Comment.jsx";

//IMAGES
import Placeholder from '../../../../images/jk-placeholder-image.jpg'

//API
import getLikes from "../../../../api/GetLikes/GetLikes";
import addLike from "../../../../api/AddLike/AddLike";
import getHasUserLiked from "../../../../api/HasUserLiked/HasUserLiked";

//UTIL
import getBaseURL from "../../../../util/Constants";

export default function BlogPost(props) {

  const location = useLocation();
  const BASE_URL = getBaseURL()
  const postIndex = props.postId
  const profileID = props.activeProfileId

  const [comments, setComments] = useState([])
  const [addedComment, setAddedComment] = useState(false)
  const [hasComments, setHasComments] = useState(false)
  const [commentTitle, setCommentTitle] = useState("")
  const [postLikes, setPostLikes] = useState(0)
  const [hasUserLiked, setHasUserLiked] = useState(false)
  const [isViewComments, setIsViewComments] = useState(false)
  const [commentCounter, setCommentCounter] = useState(0)
  const [canLike, setCanLike] = useState(true)
  const [rerender, setRerender] = useState(false);
  const [showComment, setShowComment] = useState(false)
  const [userComment, setUserComment] = useState("");
  
  async function getComments(){
    const postId = props.postId

    // request comments from API
    const result = await fetch(BASE_URL+'get-comments', {
      method: 'POST',
      body: JSON.stringify({postId}),
      headers: {'Content-Type':'application/json'},
    })

    // response from API
    var data = await result.json()
    
    // update state
    setComments(data.comment)

    
    if(data.comment.length > 0) {
      // post has likes
      setHasComments(true)
      setCommentCounter(data.comment.length)
    }
    // post has not likes
    else setHasComments(false);

    setAddedComment(false)
  }

  const badd = 1 
  function viewComments(e){
    e.preventDefault();
    setIsViewComments(!isViewComments)
  }

  const clickShowComment = () => {
    setShowComment(!showComment)
  }

  async function addComment(e){
    e.preventDefault();
    let profileID = 0;

    if(props){
      if(props.activeProfileId){
        // user is logged in
        profileID = props.activeProfileId
      }
    }
    
    //Show register modal if user is not logged in
    if(!profileID) {
      props.toggleRegisterModal() 
      return;
    }
  
    const reqComment = userComment
    const postIndex = props.postId
    const commentUser = props.username
  
   // add comment
   fetch(BASE_URL+'add-comment',{
      method: "POST",
      body: JSON.stringify({reqComment,postIndex, commentUser}),
      headers: {'Content-Type':'application/json'},
    })

    // update states
    setAddedComment(true)
    document.getElementById("blog-post-comment").value = "";
    setRerender(!rerender);
    
  }

  const handlePostClick = (e,keyID) => {
    e.preventDefault()
    props.onChangePost(keyID); 
  }

  function handleAddLike(e){
    e.preventDefault();
    if(canLike){
      // update lock
      setCanLike(false)
      // request API to add like
      addLike(getLikes, getHasUserLiked, setPostLikes, setHasUserLiked, postIndex, profileID, props.toggleRegisterModal, setCanLike);
      // update states
      setRerender(!rerender)
    }
  }
    
  useEffect(() => {
    getComments()
    getLikes(postIndex,profileID, setPostLikes)
    getHasUserLiked(postIndex,profileID,setHasUserLiked)
  },[rerender,postLikes,addedComment, props.activeProfileId, location.key, props.username])
  
  return (
          <div className="blog_post_con" key={ props.index } >
            <div>
                <div className='shadow-sm  mt-2 blog_image_con w-100 h-100' onClick={(e) => handlePostClick(e,props.index)}>
                  <LazyLoadImage  className='blog_image' src={ props.img_src || Placeholder}  visibleByDefault={props.img_src === Placeholder} alt="blog"  effect="blur" />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="blog-title mt-2">
                        <span>{props.title || <Skeleton />}</span>   
                    </div>   
                <div>
                  <footer className="blockquote-footer bg-light.bg-gradient mt-2">{props.author}<cite title="Source Title"> &#8226; {props.date ? props.date : 'No date' }</cite></footer>
                </div>
                </div>
            </div>
            <div><pre className="pre">{props.content || <Skeleton count={10}/>}</pre></div>
            <div className="d-flex flex-row border-top border-bottom p-3">
              {postLikes ? postLikes : null}
              <div  className=' ml-3 w-100' onClick={e => handleAddLike(e)}>  {hasUserLiked ? <AiIcons.AiFillHeart className={hasUserLiked ? 'heart': ''} size={28}/> : <AiIcons.AiOutlineHeart className='heart-hover' size={28} />}</div> 
              <div  onClick={clickShowComment}><AiIcons.AiOutlineMessage className='message-hover' size="2rem"/></div>   
            </div>
            <div className={showComment ? 'my-3' : 'd-none'}>
              <div className="form-group">
                <textarea onChange={e => setUserComment(e.target.value)} className="form-control" id="blog-post-comment" rows="3"></textarea>
              </div>
              <div className="d-flex justify-content-between my-3">
                <div 
                  type="button" 
                  onClick={e => viewComments(e)}
                  class=" link-primary">
                  <div className={hasComments ? 'comment-primary' : 'd-none'}>
                    <span className="mx-1">{isViewComments ? <FaChevronUp></FaChevronUp> : <FaChevronDown></FaChevronDown>}</span>
                    <span>{hasComments ? commentCounter : null}</span>
                    {hasComments ? ' Comments '  : null}</div>
                </div>
                <button 
                  type="button" 
                  onClick={e => addComment(e)}
                  class=" mr-auto btn btn-primary">Add Comment</button>
              </div>
              <div className={isViewComments ? '' : 'd-none'}>
                <Comment rerender={rerender} username={props.username} toggleRegisterModal={props.toggleRegisterModal} addedComment={addComment} activeProfileId={props.activeProfileId} commentsArray={comments} getComments={getComments} commentTitle={commentTitle} showComment={showComment}/>
              </div>
            </div>
          </div>
  
  )
}
