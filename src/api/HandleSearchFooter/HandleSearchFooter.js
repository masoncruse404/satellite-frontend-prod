//UTILS
import getBaseURL from "../../util/Constants"

//CONSTANTS
const BASE_URL = getBaseURL()

async function handleSearchFooter(varSearchPostFooter, varRefError, varNav, varSetRerender, varRerender){
    // search str
    const search = varSearchPostFooter

    // request to find post that has content matching string
    const res = await fetch(BASE_URL+'search',{ 
     method: 'POST',
     body: JSON.stringify({search}),
     headers: {'Content-Type':'application/json'},
    })

    // response from API
    const data = await res.json()
    

    if(data.message){
      // reponse found a post that has content matching search string
      const idx = data.message._id
      varNav("/blog/"+idx);
      varSetRerender(!varRerender)
      /* window.location.reload() */
    }else{
      // no post found
      let e = varRefError
      e.classList.add('invalid')
    }
     
}

export default handleSearchFooter