import ContentContainer from '../../../containers/content/ContentContainer'
import { Logo, Line, Anchor } from './signInStyles'
import { LockClosed } from '../../../assets/icons/icons'
import Form from '../form/Form'

export default function SignIn() {
  return (
    <ContentContainer>
      <Logo>
        <LockClosed />
        <h1>DrivenPass</h1>
      </Logo>
      <Form />
      <Line />
      <Anchor to="/signUp">Primeiro acesso? Crie sua conta!</Anchor>
    </ContentContainer>
  )
}
