export function request(data) {
  const submitToken = true

  const secureNotes = { url: '/secureNotes', method: 'post', data }

  const requests = [secureNotes]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, setResponse, setModalOpen } = props

  if (global.myPasswords[1].data !== null) {
    const [data] = res

    global.myPasswords[1].data = [...global.myPasswords[1].data, data.data]
  }

  const title = 'Muito bem!'

  const message = 'Cadastro feito com sucesso'

  setResponse({ title, message })

  setModalOpen(true)
}

function failCase(props) {
  const { res, setResponse, setModalOpen } = props

  let title = 'Autenticação inválida!'

  let message

  switch (res.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      title = 'Dados incorretos!'

      break

    case 'Unauthorized':
    case 'Upgrade Required':
      message =
        'Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente'

      break

    case 'Token expired/invalid':
      message = 'Sua sessão expirou\nFaça o login novamente'

      break

    case 'Conflict':
      title = 'Rótulo repetido'

      message = 'Esse rótulo já foi usado\ntente outro!'

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      break
  }

  setResponse({ title, message })

  setModalOpen(true)
}
