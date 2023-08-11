
//REACT
import React, { useState, useEffect }  from 'react'
import { useNavigate, useLocation } from "react-router-dom";


//ICONS
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//STYLES
import "./BlogPostCon.css"

//COMPONENTS
import BlogPostComponent from '../../Components/BlogPostComponent/BlogPostComponent'
import SpotlightBlogComponent from '../../Components/SpotlightBlogComponent/SpotlightBlogComponent'

//API
import getBlogs from '../../../../api/GetBlogs/GetBlogs';



function BlogContentContainer(props) {
 
  const location = useLocation();  
  let navigate = useNavigate(); 

  const [currPage, setCurrPage] = useState(props.pageNumber); // storing current page number
  const [posts, setPosts] = useState("");
  const [selectedCarID, setSelectedCarID] = useState("");
  const [selectedPostID, setSelectedPostID] = useState("");
  
  const handleDoubleClick = (idx) => {
    // update url for API request
    navigate("/blog/"+idx);
    getBlogs(setPosts)
    window.scrollTo(0,0);
    window.location.reload(); 
  }

  function onChangePost(id){
    setSelectedPostID(id === selectedPostID ? handleDoubleClick(id) : id);
  }

  const onChangeCar = (id) => {
    setSelectedCarID(id === selectedCarID ? handleDoubleClick(id) : id);
  }

  function handleGoTop(e){
    // no more posts function to go to top
    e.preventDefault()
    if(!props.showSpinner)
      window.scrollTo(0,0)
  }


  function handleGetBlogs(){
    
    if(props.canGetNextPage){
      // request blogs from API
      getBlogs(setPosts,props.setCanGetNextPage, props.pageNumber, posts, props.setNumOfPages, props.setCanFetch, props.setPageNumber, location.pathname);    
    }

  }

  useEffect(() => {
    handleGetBlogs()
  }, [props.pageNumber, location.key, props.rerender]);
  
  return (
    <>
  
    <div className="container blog-con">
       
        <div className="row " >
            <div className="col-lg-8  post-scroll ">
              <BlogPostComponent
               toggleRegisterModal={props.toggleRegisterModal} 
               username={props.username}
               activeProfileId={props.activeProfileId}
               posts={posts}
               onChangePost={onChangePost}
               selectedPostID={selectedPostID}
              />
            </div>
            <div className="col-sm-4 h-30 d-md-none d-lg-block d-md-none d-sm-none d-none">
              <div className="container fw-bolder border-bottom spotlight-banner">
                <h4>Spotlight</h4>
              </div>
              <div className="pre-scrollable  overflow-auto spotlight-sidebar ">
                <SpotlightBlogComponent posts={posts} onChange={onChangeCar} selectedId={selectedCarID} />
              </div>
            </div>
        </div>
       
    </div>

    <div onClick={e => handleGoTop(e)} className={props.showSpinner ? 'd-none' : 'd-flex justify-content-center align-items-center my-3'}>
      <i className='fa fa-xl fa-refresh'>
        <FontAwesomeIcon icon={faArrowCircleUp} />
      </i>
    </div>   
    </>
  )
}


export default BlogContentContainer