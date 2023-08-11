//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getLikes(varPostIndex,varProfileID, varSetPostLikes){
  
  const postIndex = varPostIndex
  const profileID = varProfileID

  // request number of likes on a specific post
  const res = await fetch(BASE_URL+'get-likes',{
    method: "POST",
    body: JSON.stringify({postIndex, profileID}),
    headers: {'Content-Type':'application/json'},
  })

  // response from API
  const likesResponse = await res.json()

  // update state
  varSetPostLikes(likesResponse.msg); 
  
}
export default getLikes;