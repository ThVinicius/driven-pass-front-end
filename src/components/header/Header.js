import usePath from '../../hooks/usePath'
import { LockClosed, Exit } from '../../assets/icons/icons'
import { Container, Content, Logo } from './headerStyles'

export default function Header() {
  const { isAuth } = usePath()

  return (
    !isAuth && (
      <Container>
        <Content>
          <Logo>
            <LockClosed width="45px" height="60px" />
            <h1>DrivenPass</h1>
          </Logo>
          <Exit />
        </Content>
      </Container>
    )
  )
}
