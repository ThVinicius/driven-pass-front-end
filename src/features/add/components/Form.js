import { useParams } from 'react-router-dom'
import CredentialsForm from './credentialsForm/CredentialsForm'

export default function Form() {
  const { name } = useParams()

  switch (name) {
    case 'credentials':
      return <CredentialsForm />

    case 'securenotes':
      break

    case 'cards':
      break

    case 'wireless':
      break

    default:
      break
  }
}
