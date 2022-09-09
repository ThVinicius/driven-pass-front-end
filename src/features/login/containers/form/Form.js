import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from '../../../../hooks/useApi'
import { sucessCase, failCase } from '../../api'
import Input from '../../../../components/input/Input'
import InputIcon from '../../../../components/inputIcon/InputIcon'
import Button from '../../../../components/button/Button'
import { ThreeDotsSpinner } from '../../../../components/Spinner'
import { Container, Box, ButtonContainer } from './formStyles'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { response, request } = useApi(sucessCase, failCase, false)

  function toSend(event) {
    event.preventDefault()

    const endPoint = '/signIn'

    const method = 'post'

    const body = { email, password }

    request(endPoint, method, body, navigate)
  }

  return (
    <Container onSubmit={toSend}>
      <Box>
        <h6>Usuário (e-mail)</h6>
        <Input
          value={email}
          onChange={setEmail}
          loading={response === 'loading' ? true : false}
        />
      </Box>
      <Box>
        <h6>Senha</h6>
        <InputIcon
          value={password}
          onChange={setPassword}
          loading={response === 'loading' ? true : false}
        />
      </Box>
      <ButtonContainer>
        <Button
          name="Acessar"
          loading={response === 'loading' ? true : false}
          nameLoading={ThreeDotsSpinner}
        />
      </ButtonContainer>
    </Container>
  )
}
