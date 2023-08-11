//REACT 
import React, { useState, useEffect }  from 'react'


//STYLES
import "./BlogPostCon.css"

//COMPONENTS
import BlogPostIDComponent from '../../Components/BlogPostIDComponent/BlogPostIDComponent';
import BlogCarouselContainer from '../BlogCarouselContainer/BlogCarouselContainer';

//API
import getBlog from '../../../../api/GetBlog/GetBlog';
import { useNavigate } from "react-router-dom";

function BlogContentContainer(props) {
  let navigate = useNavigate();
  const [post, setPosts] = useState("");
  const [selectedCarID, setSelectedCarID] = useState("");
  const [selectedPostID, setSelectedPostID] = useState("");
  
  const [rerender, setRerender] = useState(false);

  const handleClickCarousel = (e,idx) => {
    e.preventDefault()
    // update url for API request
    navigate("/blog/"+idx);

    // rerender to trigger API request
    setRerender(!rerender)   
  }


  const handleDoubleClick = (idx) => {
    navigate("/blog/"+idx);
    getBlog(setPosts)
 
    window.scrollTo(0,0);
  }

  const onChangeCar = (id) => {
    setSelectedCarID(id === selectedCarID ? handleDoubleClick(id) : id);
  }

  function onChangePost(id){
    setSelectedPostID(id === selectedPostID ? handleDoubleClick(id) : id);
  }

  useEffect(() => {
    
    getBlog(setPosts)

  },[rerender])

  return (
    <>
      <div className="container blog-con">
          <div className="row ">
              <div className=" border">
                <BlogPostIDComponent
                  toggleRegisterModal={props.toggleRegisterModal}
                  username={props.username}
                  activeProfileId={props.activeProfileId}
                  post={post}
                  onChangePost={onChangePost}
                  selectedID={selectedCarID}
                />
              </div>
          </div>
      </div>
      <BlogCarouselContainer
        onChange={onChangeCar}
        handleClickCarousel={handleClickCarousel}
        selectedID={selectedCarID}
      />
    </>

  )
}

export default BlogContentContainer
