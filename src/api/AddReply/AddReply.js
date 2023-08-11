//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function addReply(varProfileID, varCommentIndex, varUsername,varUserReply,varToggleRegisterModal, varGetReply, varSetHasReplies, varSetReplyCounter, varSetCommentReply,varSetReplyBool, varReplyBool){ 

  const userReply = varUserReply
  const commentIndex = varCommentIndex
  const commentUser = varUsername
  const profileID = varProfileID

  // user is not logged in show register modal
  if(!profileID) {
    varToggleRegisterModal() 
    return;
  }

  // user is logged in add reply
  const res = await fetch(BASE_URL+'add-reply',{
    method: "POST",
    body: JSON.stringify({userReply,commentIndex, commentUser}),
    headers: {'Content-Type':'application/json'},
  })
  
  
  // reply was added
  if(res.status === 200){
    // get reply and update sates
    varGetReply(varCommentIndex, varSetHasReplies, varSetReplyCounter, varSetCommentReply, varUsername,varToggleRegisterModal,varProfileID);
    varSetReplyBool(!varReplyBool)
  }
  
}


export default addReply;