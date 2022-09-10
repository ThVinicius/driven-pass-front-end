import AppContainer from '../../../containers/authApp/AppContainer'
import AuthContent from '../../../containers/authContent/AuthContent'
import Logo from '../../../components/logo/Logo'
import Form from '../components/form/Form'

export default function SignUp() {
  return (
    <AppContainer>
      <AuthContent>
        <Logo />
        <Form />
      </AuthContent>
    </AppContainer>
  )
}
