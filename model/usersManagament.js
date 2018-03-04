let registeredInUsers = []
let loggedInUser

async function register (email, password) {
  registeredUser = { email, password }
  registeredInUsers.push(registeredUser)
  console.log(`registerd user: ${registeredUser}`)
  return registeredUser
}

async function login (email, password) {
  console.log(`login user: ${email}`)
  if(registeredInUsers.filter(u => u.email === email && u.password === password).length > 0) {
    loggedInUser = { email, password }
    return true
  }
  return false
}

async function logout (email) {
  console.log('called logout')
  if (loggedInUser.email !== email) {
    console.log('Error: Not logged in!')
    return false
  }

  length = registeredInUsers.length
  registeredInUsers = registeredInUsers.map(u => u.email !== email)
  console.log(`success? ${length > registeredInUsers.length}`)
  loggedInUser = undefined
  return true
}

async function resetPassword (email, password) {
  console.log('calling resetPassword')
}

function isLoggedIn () {
  console.log(`isLoggedIn: ${loggedInUser}`)

  if (loggedInUser) {
    return true
  }
  return false
}

export default {
  login,
  logout,
  register,
  resetPassword,
  isLoggedIn
}
