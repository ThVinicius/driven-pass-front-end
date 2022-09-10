import Input from '../input/Input'
import InputIcon from '../inputIcon/InputIcon'
import Button from '../button/Button'
import { ThreeDotsSpinner } from '../Spinner'
import Back from '../../features/register/components/button/Button'
import { Container, Box, ButtonContainer } from './formStyles'

function Auth({ name, email, setEmail, password, setPassword, res, toSubmit }) {
  return (
    <Container onSubmit={toSubmit}>
      <Box>
        <h6>Usuário (e-mail)</h6>
        <Input
          value={email}
          onChange={setEmail}
          loading={res === 'loading' ? true : false}
        />
      </Box>
      <Box>
        <h6>Senha</h6>
        <InputIcon
          value={password}
          onChange={setPassword}
          loading={res === 'loading' ? true : false}
        />
      </Box>
      <ButtonContainer>
        <Button
          name={name}
          loading={res === 'loading' ? true : false}
          nameLoading={ThreeDotsSpinner}
        />
        {name === 'Criar' ? <Back /> : null}
      </ButtonContainer>
    </Container>
  )
}

export default Auth
