import { useNavigate } from 'react-router-dom'
import { Container, Anchor, Add, Back, Remove } from './footerStyles'

export default function Footer({ back = false, modal = null }) {
  const navigate = useNavigate()

  return (
    <Container justifyContent={back}>
      {back && <Back onClick={() => navigate(-1)}>&lt; Voltar</Back>}
      {modal === null ? (
        <Anchor to="/add">
          <Add>+</Add>
        </Anchor>
      ) : (
        <Remove>x</Remove>
      )}
    </Container>
  )
}
