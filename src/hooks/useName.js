export default function useName(params) {
  const compare = params.toLowerCase()

  let path

  switch (compare) {
    case 'credentials':
      path = 'Credenciais'
      break

    case 'securenotes':
      path = 'Notas seguras'
      break

    case 'cards':
      path = 'Cartões'
      break

    case 'wireless':
      path = 'Wireless'
      break

    default:
      break
  }

  return path
}
