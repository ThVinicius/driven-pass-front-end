import { useNavigate } from 'react-router-dom'
import { Checkmark } from '../../../../assets/icons/icons'
import { ColorSpinner } from '../../../../components/Spinner'
import { Container, Submit, Back } from './footerStyles'

export default function Footer({ loading }) {
  const navigate = useNavigate()

  function back() {
    if (loading) return

    navigate(-1)
  }

  return (
    <Container>
      <Back onClick={back}>&lt; Voltar</Back>
      {loading ? (
        ColorSpinner
      ) : (
        <Submit type="submit">
          <Checkmark />
        </Submit>
      )}
    </Container>
  )
}
