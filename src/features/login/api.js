export function configRequest(data) {
  const url = '/signIn'

  const method = 'post'

  const submitToken = false

  const requests = [{ url, method, data }]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, navigate } = props

  const [data] = res

  global.token = data.data.token

  navigate('/home')
}

function failCase(props) {
  const { res, setResponse, setModalOpen } = props

  let title = 'Login inválido!'

  let message

  switch (res.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      break

    case 'Unauthorized':
      message =
        'Confira o seu nome de usuário e senha para validar o seu acesso.'

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      break
  }

  setResponse({ title, message })

  setModalOpen(true)
}
