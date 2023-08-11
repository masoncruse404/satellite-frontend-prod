//UTILS
import getBaseURL from "../../util/Constants";

//CONSTANTS
const BASE_URL = getBaseURL()

async function handleRegister(varToggleRegisterModal, varToggleModal, varIsPasswordValid, varIsEmailValid, varSetErrorMSG, varRef, varEmail, varPassword){
  var emailIn = varRef
  const email = varEmail
  const password = varPassword

  if(varIsPasswordValid && varIsEmailValid){
    // request that user be added to database
    const res = await fetch(BASE_URL+'register', {
      method:'POST',
      body: JSON.stringify({email, password}),
      headers: {'Content-Type':'application/json'},
    })
  // response from API
  if(res.status === 201){
    // user was added to db
    varToggleRegisterModal();
    varToggleModal();
  }

  if(res.status === 500){
    // user was not added to db
    emailIn.classList.add('invalid')
    const errorResponse = await res.json()
    varSetErrorMSG(errorResponse.message)
  }

  if(res.status === 409){
    // user was not added to db
    emailIn.classList.add('invalid')
    const errorResponse = await res.json()
    varSetErrorMSG(errorResponse.message)
  }
 
}
}

export default handleRegister;