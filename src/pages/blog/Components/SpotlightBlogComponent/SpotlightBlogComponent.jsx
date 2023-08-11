//REACT
import React from 'react'

//COMPONENTS
import SpotlightBlogCardComponent from '../BlogSpotlightCardComponent/BlogSpotlightCardComponent'

//UTILS
import getImage from '../../../../util/getImage'


const SpotlightBlogComponent = (props) =>{

    const obj = props.posts;
    const posts = []
    Object.entries(obj).forEach(entry => {
        const [key, value] = entry;
        posts.push(value);
    });
    
    return ( 
        posts.map((post, index) => {
            let image = getImage(post.image);
            return (<SpotlightBlogCardComponent onChange={props.onChange} title={post.title} date={post.parsedCreatedAt} author={post.author} selectedID={props.selectedId} id={post._id} image={image}/>)
    }))
}

export default SpotlightBlogComponent