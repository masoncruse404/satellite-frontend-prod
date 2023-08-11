//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getHasUserLiked(varPostIndex,varProfileID, varSetHasUserLiked){
  // check if user is logged in
  if(!varProfileID){
    return;
  }

  const postIndex = varPostIndex
  const profileID = varProfileID

  // request if user has liked post
  const res = await fetch(BASE_URL+'get-has-user-liked',{
    method: "POST",
    body: JSON.stringify({postIndex, profileID}),
    headers: {'Content-Type':'application/json'},
  })

  // response from API
  const likesResponse = await res.json()
  // update state
  varSetHasUserLiked(likesResponse.msg)
  
}

export default getHasUserLiked;