import { useNavigate } from 'react-router-dom'
import { Container, Anchor, Add, Back } from './footerStyles'

export default function Footer({ back = false }) {
  const navigate = useNavigate()

  return (
    <Container justifyContent={back}>
      {back && <Back onClick={() => navigate(-1)}>&lt; Voltar</Back>}
      <Anchor to="/add">
        <Add>+</Add>
      </Anchor>
    </Container>
  )
}
