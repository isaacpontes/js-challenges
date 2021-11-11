const database = ['erick_14', 'pam_ls2', 'VICTOR_99A']

function validateUser(username) {
  if (username.length < 4 || username.length > 32) {
    console.log('Invalid size')
    return false
  }

  if (username.match(/\W|^[0-9]|^_|_$/)) {
    console.log('Invalid characters')
    return false
  }

  if (! (username.match(/[A-Za-z]/) && username.match(/[0-9]/) && username.match(/_/))) {
    console.log('Required characters missing')
    return false
  }

  const usernameAlreadyExists = database.indexOf(username) !== -1

  if (usernameAlreadyExists) {
    console.log('Username already exists')
    return false
  }

  return true
}

console.log(validateUser(''))
console.log(validateUser('____'))
console.log(validateUser('username'))
console.log(validateUser('username123'))
console.log(validateUser('abc'))
console.log(validateUser('erick_14'))
console.log(validateUser('erick_15'))
console.log(validateUser('123'))
console.log(validateUser('isaac-pontes'))
console.log(validateUser('isaac_pontes2'))
console.log(validateUser('qwertyuiopasdfghjklzxcvbnmqwertyuiop'))
console.log(validateUser('52alfred'))
console.log(validateUser('hugo123_'))
