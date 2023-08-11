//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getBlogsCarousel(varSetPosts, varPosts){
    //Request posts
    const res =  await fetch(BASE_URL+"computer-security");

    //Receive response from API
    const data = await res.json()

    //Set posts
    varSetPosts(data.message)
}

export default getBlogsCarousel;