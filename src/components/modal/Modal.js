import Button from '../../components/button/Button'
import { Container, Content, Description } from './modalStyles'

export default function Modal({ modalOpen, setModalOpen, msg }) {
  if (msg === null) return null

  const { title, message } = msg

  return (
    modalOpen && (
      <Container>
        <Content>
          <Description>
            <h1>{title}</h1>
            <h2>{message}</h2>
          </Description>
          <Button name="Ok" click={() => setModalOpen(false)} />
        </Content>
      </Container>
    )
  )
}
