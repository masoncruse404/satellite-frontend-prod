//REACT
import React from 'react'

//COMPONENTS
import BlogPost from "../BlogPost/BlogPost.jsx"

//UTILS
import getImage from '../../../../util/getImage.js'



const BlogPostIDComponent = (props) =>{
   
  const post = props.post;
   
  let post_img = getImage(post.image)
 
  return (<BlogPost toggleRegisterModal={props.toggleRegisterModal} date={post.parsedCreatedAt} onChangePost={props.onChangePost} username={props.username} activeProfileId={props.activeProfileId} index={ post._id } postId={post._id} content={post.content} key={post._id} img_src={ post_img }  title={ post.title } blog_category={ post.blog_category } author={ post.author } />)

}
export default BlogPostIDComponent;