import { useParams } from 'react-router-dom'
import CredentialsForm from './credentialsForm/CredentialsForm'
import SecureNotesForm from './secureNotesForm/SecureNotesForm'
import CardsForm from './cardsForm/CardsForm'
import WirelessForm from './wirelessForm/WirelessForm'
import page from '../../../assets/images/page.png'

export default function Form() {
  const { name } = useParams()

  const compare = name.toLowerCase()

  switch (compare) {
    case 'credentials':
      return <CredentialsForm />

    case 'securenotes':
      return <SecureNotesForm />

    case 'cards':
      return <CardsForm />

    case 'wireless':
      return <WirelessForm />

    default:
      return (
        <img
          style={{ width: '100%', height: '100%' }}
          src={page}
          alt="Not Found"
        />
      )
  }
}
