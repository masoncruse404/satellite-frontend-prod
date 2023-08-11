//REACT
import React from 'react'

//COMPONENTS
import BlogPost from '../BlogPost/BlogPost'

//UTILS
import getImage from '../../../../util/getImage'


const BlogPostComponent = (props) =>{
   
    const posts = []
    Object.entries(props.posts).forEach(entry => {
        const [key, value] = entry;
        posts.push(value);
    });

  return (
    posts.map((post, index) => {
      let post_img = getImage(post.image)
      return (<BlogPost onChangePost={props.onChangePost} selectedPostID={props.selectedPostID} toggleRegisterModal={props.toggleRegisterModal} date={post.parsedCreatedAt} username={props.username} activeProfileId={props.activeProfileId} index={ post._id } postId={post._id} content={post.content} key={post._id} img_src={ post_img }  title={ post.title } blog_category={ post.blog_category } author={ post.author } />)})
)
}

export default BlogPostComponent;