//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function addLike(varGetLikes, varGetHasUserLiked, varSetPostLikes, varSetHasUserLiked, varPostIndex, varProfileID,varToggleRegisterModal, varSetCanLike){
  
  const postIndex = varPostIndex
  const profileID = varProfileID

  //user cannot like a post if they are not logged in
  if(!varProfileID) {
    //update like lock
    varSetCanLike(true)
    //show register modal
    varToggleRegisterModal() 
    return;
  }
 
  //user is logged in add like
  const res = await fetch(BASE_URL+'add-like',{
    method: "POST",
    body: JSON.stringify({postIndex, profileID}),
    headers: {'Content-Type':'application/json'},
  })

  const data = await res.json()
  //update states and retreive updated number of likes
  varGetHasUserLiked(varPostIndex, varProfileID,varSetHasUserLiked)
  varGetLikes(varPostIndex,varProfileID,varSetPostLikes);
  varSetCanLike(true)
 
}

export default addLike;