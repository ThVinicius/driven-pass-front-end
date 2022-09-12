import { useParams } from 'react-router-dom'
import CredentialsForm from './credentialsForm/CredentialsForm'
import SecureNotesForm from './secureNotesForm/SecureNotesForm'
import CardsForm from './cardsForm/CardsForm'
import WirelessForm from './wirelessForm/WirelessForm'

export default function Form() {
  const { name } = useParams()

  switch (name) {
    case 'credentials':
      return <CredentialsForm />

    case 'securenotes':
      return <SecureNotesForm />

    case 'cards':
      return <CardsForm />

    case 'wireless':
      return <WirelessForm />

    default:
      break
  }
}
