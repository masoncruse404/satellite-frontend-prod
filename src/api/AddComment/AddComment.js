//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function addComment(varPostIndex, varProfileID,varPostID, varUsername,varUserComment, varToggleRegisterModal, varSetComments,varSetCommentCounter,varGetComments,  varSetHasComments, varSetAddedComment){
 
  const reqComment = varUserComment
  const postIndex = varPostIndex
  const commentUser = varUsername
 
  let profileID = 0;
  // user is logged in update profileID
  if(varProfileID)
    profileID = varProfileID

  // show register modal if user is not logged in
  if(!profileID) {
    varToggleRegisterModal() 
    return;
  }
  
  // user is logged in so add comment
  fetch(BASE_URL+'add-comment',{
    method: "POST",
    body: JSON.stringify({reqComment,postIndex, commentUser}),
    headers: {'Content-Type':'application/json'},
  })

  //update addedComment state
  varSetAddedComment(true)

  //retreive new comments
  varGetComments(varPostIndex, varSetComments, varSetCommentCounter,varSetHasComments,varSetAddedComment) 
  
}
export default addComment;