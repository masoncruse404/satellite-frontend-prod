//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

// function to allow scroll
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';  // firefox, chrome
    document.body.scroll = "yes"; // ie only
}

async function getBlogs(varSetPosts,varCanGetPage, varPageNum, varPost, varSetNumOfPages,  varCanFetch, varSetPageNum, varURLCat){
    console.log('in getBlogs')
    var urlCategory = false
     // url is not on home page
    if(varURLCat){
        // parse category
        urlCategory = varURLCat.slice(1)
        
        if (urlCategory === "blogs"){
            // request posts
            const res =  await fetch(BASE_URL+"posts?pageNumber="+varPageNum);  
            // receive response from API
            const data = await res.json()

            // update state
            varSetNumOfPages(Math.ceil(data.data.totalPosts/data.data.rowsPerPage))
            
            // page contains older posts add response to old array
            if(varPageNum > 0)
                varSetPosts([...varPost,...data.data.data])
            // page has no older posts set array to only received posts
            else   
                varSetPosts([...data.data.data])
        

            setTimeout(() => {
                // update sates
                varCanGetPage(true)
                varCanFetch(true)

                // allow user to scroll 
                reloadScrollBars() 
            },1000)
        
        }else if(urlCategory){
            // url contains a category
            // request posts for specific category
            const res =  await fetch(BASE_URL+"category?pageNumber="+varPageNum+"&&category="+urlCategory);  
            
            // response from API
            const data = await res.json()

            // update state
            varSetNumOfPages(Math.ceil(data.data.totalPosts/data.data.rowsPerPage))
            
            // page contains older posts add response to old array
            if(varPageNum > 0)
                varSetPosts([...varPost,...data.data.data])
            // page has no older posts set array to only received posts
            else
                varSetPosts([...data.data.data])
    
            setTimeout(() => {
                // update states
                varCanGetPage(true)
                varCanFetch(true)
                // allow user to scroll again
                reloadScrollBars()  
            },1000)

        }
    }

    // url is home page
    if (!urlCategory){
        const res =  await fetch(BASE_URL+"posts");  
        console.log('res',res)
        const data = await res.json()
        console.log('data',data.data.data)
        varSetPosts(data.data.data)
    }
   
   

}

export default getBlogs;