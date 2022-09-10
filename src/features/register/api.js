export function configRequest(data) {
  const url = '/signUp'

  const method = 'post'

  const requests = [{ url, method, data }]

  const submitToken = false

  return [requests, submitToken, sucessCase, failCase]
}

function sucessCase({ navigate }) {
  alert('cadastro realizado com sucesso!')

  navigate('/')
}

function failCase(props) {
  const { res, setSeeking } = props

  switch (res.statusText) {
    case 'Bad Request':
      const error = res.data.reduce((acc, cur) => `${acc}\n` + cur, '')

      alert(error)
      break

    case 'Conflict':
      const message = 'Esse email já está cadastrado!\nTente outro email'

      alert(message)
      break

    default:
      alert('Ocorreu um erro inesperado!\nTente mais tarde')
      console.log(res)
      break
  }

  setSeeking(false)
}
