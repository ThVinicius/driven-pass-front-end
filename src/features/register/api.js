export function configRequest(data) {
  const url = '/signUp'

  const method = 'post'

  const requests = [{ url, method, data }]

  const submitToken = false

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase({ setResponse, setModalOpen }) {
  const title = 'Cadastro realizado com sucesso!'

  const message = 'Você sera redirecionado para fazer login'

  const nav = '/'

  setResponse({ title, message, nav })

  setModalOpen(true)
}

function failCase(props) {
  const { res, setResponse, setModalOpen } = props

  let title = 'Cadastro inválido!'

  let message

  switch (res.statusText) {
    case 'Bad Request':
      message = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      break

    case 'Conflict':
      message = 'Esse email já está cadastrado!\nTente outro email'

      break

    default:
      message = 'Ocorreu um erro inesperado!\nTente mais tarde'
      console.log(res)
      break
  }

  setResponse({ title, message })

  setModalOpen(true)
}
