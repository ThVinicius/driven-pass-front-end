import { useNavigate } from 'react-router-dom'
import usePath from '../../hooks/usePath'
import { useGlobal } from '../../context/globalContext'
import logout from '../../utils/logout'
import { LockClosed, Exit } from '../../assets/icons/icons'
import { Container, Content, Logo, Anchor } from './headerStyles'

export default function Header() {
  const navigate = useNavigate()
  const { isAuth } = usePath()
  const { global } = useGlobal()

  return (
    !isAuth && (
      <Container>
        <Content>
          <Anchor to="/home">
            <Logo>
              <LockClosed width="45px" height="60px" />
              <h1>DrivenPass</h1>
            </Logo>
          </Anchor>
          <Exit onClick={() => logout(global, navigate)} />
        </Content>
      </Container>
    )
  )
}
