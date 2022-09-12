export function configReq(id) {
  const url = `/secureNotes/${id}`

  const method = 'delete'

  const submitToken = true

  const requests = [{ url, method }]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { global, setResponse, id } = props

  const title = 'Deletado com sucesso!'

  const nav = -1

  global.myPasswords[1].data = global.myPasswords[1].data.filter(
    item => item.id !== id
  )

  setResponse({ title, nav })
}

function failCase(props) {
  const { res, setResponse } = props

  const nav = '/'

  const title = 'Autenticação inválida!'

  let message

  switch (res?.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      break

    case 'Unauthorized':
    case 'Upgrade Required':
      message =
        'Ocorreu um um erro durante sua autenticação\nTente fazer o login novamente'

      break

    case 'Token expired/invalid':
      message = 'Sua sessão expirou\nFaça o login novamente'

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      break
  }

  setResponse({ title, message, nav })
}
