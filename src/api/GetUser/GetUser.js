//UTILS
import getBaseURL from "../../util/Constants";
import Cookies from "universal-cookie";

//CONSTANTS
const BASE_URL = getBaseURL()

async function getUser(varSetUsername, varSetActiveProfileId){

    const cookies = new Cookies();  
    const token = cookies.get("token");

    // request user obj that matches cookie
    const res = await fetch(BASE_URL+'profile',{ 
     method: 'POST',
     body: JSON.stringify({token}),
     headers: {'Content-Type':'application/json'},
    })

    // response from API
    const data = await res.json()

    // update states
    varSetUsername(data.message)
    varSetActiveProfileId(data.userId)
    
}
export default getUser