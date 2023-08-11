//UTILS
import getBaseURL from "../../util/Constants";
import parseURL from "../../util/ParseURL";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getBlog(varSetPosts){
  //parse url for post ID
  const idx = parseURL();

  //request post with post ID 
  const res =  await fetch(BASE_URL+"get-blog", {
    method: "POST",
    body: JSON.stringify({idx}),
    headers: {'Content-Type':'application/json'},
  });
  
  //receive post
  const data = await res.json()

  //set post
  varSetPosts(data.message)
  window.scrollTo(0,0)
}
export default getBlog;