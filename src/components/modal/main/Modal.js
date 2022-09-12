import { useNavigate } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import logout from '../../../utils/logout'
import Button from '../../button/Button'
import Remove from '../remove/Remove'
import { Container, Content, Description } from './modalStyles'

function Modal({ modalOpen, setModalOpen, msg, fetch, id, req }) {
  const { global } = useGlobal()
  const navigate = useNavigate()

  if (msg === null) return null

  const { title, message, nav } = msg

  function ok() {
    if (nav === undefined) return setModalOpen(false)

    if (nav === '/') return logout(global, navigate)

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
          {msg.title !== 'Confirme a ação de deletar' ? (
            <Button name="Ok" click={ok} />
          ) : (
            <Remove ok={ok} fetch={fetch} id={id} req={req} />
          )}
        </Content>
      </Container>
    )
  )
}

export default Modal
