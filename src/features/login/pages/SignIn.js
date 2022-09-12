import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AppContainer from '../../../containers/authApp/AppContainer'
import AuthContent from '../../../containers/authContent/AuthContent'
import { Line, Anchor } from './signInStyles'
import Logo from '../../../components/logo/Logo'
import Form from '../components/form/Form'

export default function SignIn() {
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (token !== null) {
      global.token = token

      navigate('/home')
    }
  }, [])

  return (
    <AppContainer>
      <AuthContent>
        <Logo />
        <Form />
        <Line />
        <Anchor to="/signUp">Primeiro acesso? Crie sua conta!</Anchor>
      </AuthContent>
    </AppContainer>
  )
}
