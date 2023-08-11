//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getProfile(varProfileID, varSetPosts){
    
    // request posts that user has liked
    const response = await fetch(BASE_URL + 'get-profile',{
        method: 'POST',
        body: JSON.stringify({varProfileID}),
        headers: {'Content-Type':'application/json'},
    })

    // response from API
    const json = await response.json()
    
    // response contains posts (user has liked posts)
    if(json.posts){
        // update state
        varSetPosts(json.posts)
    }
    
}

export default getProfile