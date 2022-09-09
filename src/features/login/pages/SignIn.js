import ContentContainer from '../../../containers/content/ContentContainer'
import { Line, Anchor } from './signInStyles'
import Logo from '../../../components/logo/Logo'
import Form from '../containers/form/Form'

export default function SignIn() {
  return (
    <ContentContainer>
      <Logo />
      <Form />
      <Line />
      <Anchor to="/signUp">Primeiro acesso? Crie sua conta!</Anchor>
    </ContentContainer>
  )
}
