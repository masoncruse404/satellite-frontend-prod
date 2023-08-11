//REACT
import Cookies from "universal-cookie";

//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function handleLogin(varIsEmailValid,varSetActiveProfileId, varSetLogin, varToggleModal,varSetErrorMSG, varSetErrorMSGPassword, varEmail, varPassword, varRefEmail, varRefPassword){
    
  const element = varRefEmail
  const elementPassword = varRefPassword
  const email = varEmail
  const password = varPassword

  if(!varIsEmailValid) return;

  // request that users credientials be check
  const response = await fetch(BASE_URL+"login", {
    method: 'POST',
    body: JSON.stringify({email,password}),
    headers: {'Content-Type':'application/json'},  
  })

  // response from API
  if(response.status === 200){
    // users email and password match records
    response.json().then(userInfo => {
      const cookies = new Cookies();
      varSetActiveProfileId(userInfo.userID)
      cookies.set("token", userInfo.token);
      varSetLogin(true)
      varToggleModal();
    })
  }
  
  if(response.status === 400){
    // no account matches given email
    element.classList.add('invalid')
    varSetErrorMSG("No account found")
    varSetLogin(false)
    return
  }
  
  if(response.status === 401){
    // password does not match records
    elementPassword.classList.add('invalid')
    varSetErrorMSGPassword("Invalid password")
    varSetLogin(false)
    return
  }

}


export default handleLogin;
