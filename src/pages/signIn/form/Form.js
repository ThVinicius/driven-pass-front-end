import { useState } from 'react'
import Input from '../../../components/input/Input'
import InputIcon from '../../../components/inputIcon/InputIcon'
import Button from '../../../components/button/Button'
import { Container, Box, ButtonContainer } from './formStyles'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function toSend(event) {
    event.preventDefault()

    console.log('mandar para o servidor')
  }

  return (
    <Container onSubmit={toSend}>
      <Box>
        <h6>Usuário (e-mail)</h6>
        <Input value={email} onChange={setEmail} />
      </Box>
      <Box>
        <h6>Senha</h6>
        <InputIcon value={password} onChange={setPassword} />
      </Box>
      <ButtonContainer>
        <Button name="Acessar" />
      </ButtonContainer>
    </Container>
  )
}
