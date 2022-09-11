export function request() {
  const submitToken = true

  const credentials = { url: '/credentials', method: 'get' }

  const secureNotes = { url: '/secureNotes', method: 'get' }

  const cards = { url: '/cards', method: 'get' }

  const wireless = { url: '/wireless', method: 'get' }

  const requests = [credentials, secureNotes, cards, wireless]

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase(props) {
  const { res, global, setGlobal } = props

  globalPopulation(global, res)

  setGlobal({ ...global })
}

function failCase(props) {
  const { res, setResponse, setModalOpen } = props

  const nav = '/'

  const title = 'Autenticação inválida!'

  let message

  switch (res.statusText) {
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

  setModalOpen(true)
}

function globalPopulation(global, res) {
  res.forEach(({ data }, index) => {
    global.myPasswords[index].data = data
  })
}
