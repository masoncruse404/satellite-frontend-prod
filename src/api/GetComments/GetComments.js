//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getComments(varPostID, varSetComments, varSetCommentCounter, varSetHasComments,  varSetAddedComment){
  
  const postID = varPostID
  
  // request comments for a specific post
  const result = await fetch(BASE_URL +'get-comments', {
    method: 'POST',
    body: JSON.stringify({postID}),
    headers: {'Content-Type':'application/json'},
  })

  // response from API
  var data = await result.json()
  
  // post has comments
  if(data.comment.length > 0) { 
    // update states 
    varSetComments(data.comment)
    varSetHasComments(true);
    varSetCommentCounter(data.comment.length)
  }
  // post has no comments
  else varSetHasComments(false);
  
  // update state
  varSetAddedComment(false)

}
export default getComments;