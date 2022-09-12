import myPasswords from '../utils/myPasswords'

export default function logout(global, navigate) {
  global.token = null

  global.myPasswords = myPasswords

  localStorage.removeItem('token')

  navigate('/')
}
