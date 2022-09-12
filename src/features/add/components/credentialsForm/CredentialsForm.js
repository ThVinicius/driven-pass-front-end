import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import { request } from '../../api'
import useModal from '../../../../hooks/useModal'
import Modal from '../../../../components/modal/Modal'
import { Container, Title, InputsBox, InputBox } from './formStyles'
import Input from '../../../../components/input/Input'
import InputIcon from '../../../../components/inputIcon/InputIcon'
import Footer from '../footer/Footer'

export default function CredentialsForm() {
  const [label, setLabel] = useState('')
  const [url, setUrl] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  const submit = event => {
    event.preventDefault()

    const data = { label, url, username, password }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
      <InputsBox>
        <Title>Cadastro</Title>
        <InputBox>
          <h2>Título</h2>
          <Input
            width="100%"
            value={label}
            onChange={setLabel}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>URL</h2>
          <Input
            type="url"
            width="100%"
            value={url}
            onChange={setUrl}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Usuário</h2>
          <Input
            width="100%"
            value={username}
            onChange={setUsername}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Senha</h2>
          <InputIcon
            width="100%"
            value={password}
            onChange={setPassword}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
      </InputsBox>
      <Footer loading={response === 'loading' ? true : false} />
    </Container>
  )
}
