export function sucessCase(props) {
  const { res, global, navigate } = props

  global.token = res.token

  navigate('/home')
}

export function failCase(props) {
  const { res, setResponse } = props

  switch (res.statusText) {
    case 'Bad Request':
      const error = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      alert(error)
      break

    case 'Unauthorized':
      const message = 'Email ou senha incorreta'

      alert(message)
      break

    default:
      alert('Ocorreu um erro inesperado!\nTente mais tarde')
      break
  }

  setResponse(null)
}
