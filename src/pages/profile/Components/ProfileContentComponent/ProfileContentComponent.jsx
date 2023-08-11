//REACT 
import React, { useState, useEffect, useRef }  from 'react'
import { useNavigate } from "react-router-dom";

//STYLES
import "../../../blog/Containers/BlogPostContentContainer/BlogPostCon.css"

//COMPONENTS
import BlogPostComponent from '../../../blog/Components/BlogPostComponent/BlogPostComponent';


//API
import getProfile from '../../../../api/GetProfile/GetProfile';
import { act } from 'react-dom/test-utils';
import getBlog from '../../../../api/GetBlog/GetBlog';
import getUser
 from '../../../../api/GetUser/GetUser';
function BlogContentContainer(props) {
  let navigate = useNavigate();
  const [post, setPosts] = useState("");
  const [selectedCarID, setSelectedCarID] = useState("");
  const [selectedPostID, setSelectedPostID] = useState("");
  const ref = useRef(null);
 
  const handleDoubleClick = (idx) => {
    navigate("/blog/"+idx);
    getBlog(setPosts)
  }

  const onChangeCar = (id) => {
    setSelectedCarID(id === selectedCarID ? handleDoubleClick(id) : id);
  }

  function onChangePost(id){
    setSelectedPostID(id === selectedPostID ? handleDoubleClick(id) : id);
  }
  function toggleClass(var_element){
    if(post.length > 0){
      var_element.classList.remove('no-likes')
    }else{
      var_element.classList.add('no-likes')
    }
  }

  useEffect(() => {  
        getProfile(props.activeProfileId, setPosts)
        const element = ref.current;
        toggleClass(element)
  },[props.activeProfileId, post])

  return (
    <>
    <div ref={ref} className="container blog-con ">
        <div className="row ">
            <div className=" border">
              <BlogPostComponent
                toggleRegisterModal={props.toggleRegisterModal}
                username={props.username}
                activeProfileId={props.activeProfileId}
                posts={post}
                onChangePost={onChangePost}
                selectedID={selectedCarID}
              />
            </div>
        </div>
    </div>
    
    </>

  )
}

export default BlogContentContainer
