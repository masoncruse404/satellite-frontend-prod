//REACT
import React, {useEffect, useState} from 'react'

//STYLES
import "./FeaturedArticlesComponent.css";

//COMPONENTS
import ArticlesComponent from "../../Components/ArticlesComponent/ArticlesComponent";

//IMAGES
import Coding from "../../../../images/data-green.svg"
import CodingB from "../../../../images/svg-2.svg"
import Hammer from "../../../../images/shopping.svg"
//API
import getBlogs from '../../../../api/GetBlogs/GetBlogs';
function FeaturedArticlesContainer(props) {
    const [articles, setArticles] = useState([])

    useEffect(() => {
       getBlogs(setArticles)
    },[])
  
  return (
    <div className='feature-articles-con'>
              <div className='feature-articles-header'><div className='featured-articles-header-text'>Featured Articles</div></div>
            <div className='feature-articles-wrapper'>
                
                <ArticlesComponent 
                    img_src={ Coding }
                    size={ 150 }
                    category={articles[4] ? articles[4].blog_category : null} 
                    read_time={" / 3 min read"}
                    title={articles[4] ? articles[4].title : null}
                    author={articles[4] ? articles[4].author : null}
                    post_date={articles[4] ? articles[4].parsedCreatedAt : null}
                    content={articles[4] ?  articles[4].content : null}
                    idx={articles[4] ? articles[4]._id : null}
                    varSetRerender={props.setRerender}
                    varRerender={props.rerender}
                />
                 <ArticlesComponent 
                            id="article-b"
                            img_src={ CodingB }
                            size={ 150 }
                            category={articles[1] ? articles[1].blog_category : null} 
                            read_time={" / 6 min read"}
                            title={articles[1] ? articles[1].title : null}
                            author={articles[1] ? articles[1].author : null}
                            post_date={articles[1] ? articles[1].parsedCreatedAt : null}
                            content={articles[1] ?  articles[1].content : null}
                            idx={articles[1] ? articles[1]._id : null}
                            varSetRerender={props.setRerender}
                            varRerender={props.rerender}
                />
                <ArticlesComponent 
                            img_src={ Hammer }
                          
                            size={ 150 }
                            category={articles[2] ? articles[2].blog_category : null} 
                            read_time={" / 9 min read"}
                            title={articles[2] ? articles[2].title : null}
                            author={articles[2] ? articles[2].author : null}
                            post_date={articles[2] ? articles[2].parsedCreatedAt : null}
                            content={articles[2] ?  articles[2].content : null}
                            idx={articles[2] ? articles[2]._id : null}
                            varSetRerender={props.setRerender}
                            varRerender={props.rerender}
                        />
        </div> 
    </div>
  )
}

export default FeaturedArticlesContainer