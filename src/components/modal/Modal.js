import { useNavigate } from 'react-router-dom'
import Button from '../../components/button/Button'
import { Container, Content, Description } from './modalStyles'

export default function Modal({ modalOpen, setModalOpen, msg }) {
  const navigate = useNavigate()

  if (msg === null) return null

  const { title, message, nav } = msg

  function ok() {
    if (nav === undefined) return setModalOpen(false)

    navigate(nav)
  }

  return (
    modalOpen && (
      <Container>
        <Content>
          <Description>
            <h1>{title}</h1>
            <h2>{message}</h2>
          </Description>
          <Button name="Ok" click={ok} />
        </Content>
      </Container>
    )
  )
}
