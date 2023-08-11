//COMPONENTS
import ReplyComponent from "../../pages/blog/Components/ReplyComponent/ReplyComponent";

//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getReply(varPostID, varSetHasReplies, varSetReplyCounter, varSetCommentReply,varUsername, varToggleRegisterModal,varProfileID){
 
  const postId = varPostID
  
  // request replies on specific comments
  const res = await fetch(BASE_URL+'get-reply', {
    method: 'POST',
    body: JSON.stringify({postId}),
    headers: {'Content-Type':'application/json'},
  })
  
  // response from API
  const data = await res.json()

  // response contains replies
  if(data.comment){
    if(data.comment.length > 0){
      // update states
      varSetHasReplies(true) 
      varSetReplyCounter(data.comment.length)
    }
  }
  // update state
  var f1 = data.comment.map((number) => 

    <div key={data.comment._id} className='sub-comment'><ReplyComponent  replyTo={number.replyTo} author={number.author} username={varUsername} postIndex={varPostID} toggleRegisterModal={varToggleRegisterModal}  activeProfileId={varProfileID} key={number._id} post={number} /></div>
);

  varSetCommentReply(f1)

}

  export default getReply;