//REACT
import React, {useEffect, useState} from 'react'

//ICONS
import { FaChevronLeft, FaChevronRight} from "react-icons/fa";

//COMPONENTS
import BlogCarouselComponent from '../../Components/BlogCarouselComponent/BlogCarouselComponent';

//API
import getBlogsCarousel from '../../../../api/GetBlogCarousel/GetBlogCarousel';

//UTIL
import getImage from '../../../../util/getImage'

//STYLES
import "./BlogCard.css";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function BlogCarouselContainer(props) {

  const [posts, setPosts] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0);

  const NUM_OF_CARDS = 3
  var currentIdx = currentIndex

  function getBlogComponenet(index){
    let post = posts[index]

    if(post){
      let image = getImage(post.image)
      let title = post.title;
      return <BlogCarouselComponent author={post.author} date={post.parsedCreatedAt} handleClickCarousel={props.handleClickCarousel} id={post._id} key={post._id} onChange={props.onChange} selectedID={props.selectedID} image={image} title={title} />
    }
  }

  // click functions
  function increaseIndex(){
    if (currentIdx +1 > posts.length - NUM_OF_CARDS) setCurrentIndex(0)
    else setCurrentIndex(currentIndex + 1)
  }

  function decreaseIndex(){
    if (currentIdx - 1 < 0) setCurrentIndex(posts.length - NUM_OF_CARDS)
    else setCurrentIndex(currentIndex - 1)
  }
  
  // set cards
  var card1 = getBlogComponenet(currentIdx)
  var card2 = getBlogComponenet(currentIdx + 1)
  var card3 = getBlogComponenet(currentIdx + 2)
   
  useEffect(() => {
    getBlogsCarousel(setPosts, posts)
    
  }, [currentIndex])  
  return (
    
    <>
    <div class=" blog-card-con">
      <div className='container'>
        <div class="row blog-card-row">
          <div class="col-lg">
            {card1 || <Skeleton count={5}/>}
          </div>
          <div class="col-lg">
            {card2 || <Skeleton count={5}/>}
          </div>
          <div class="col-lg">
            {card3 || <Skeleton count={5}/>}
          </div>
        </div>
        <div className='row py-3'>
          <div className='d-flex justify-content-center blog-chev-con'>
            <div className='blog-chev-item' onClick={() => decreaseIndex()}><FaChevronLeft size={25}/></div>
            <div className='blog-chev-item' onClick={() => increaseIndex()}><FaChevronRight size={25}/></div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default BlogCarouselContainer