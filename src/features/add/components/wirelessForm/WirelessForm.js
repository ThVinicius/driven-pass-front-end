import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import { request } from './api'
import useModal from '../../../../hooks/useModal'
import Modal from '../../../../components/modal/main/Modal'
import useClean from '../../../../hooks/useClean'
import { Container, Title, InputsBox, InputBox } from './formStyles'
import Input from '../../../../components/input/Input'
import InputIcon from '../../../../components/inputIcon/InputIcon'
import Footer from '../footer/Footer'

export default function WirelessForm() {
  const [label, setLabel] = useState('')
  const [networkName, setNetworkName] = useState('')
  const [password, setPassword] = useState('')
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  useClean([setLabel, setNetworkName, setPassword], response)

  const submit = event => {
    event.preventDefault()

    const data = { label, networkName, password }

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
          <h2>Nome da rede</h2>
          <Input
            width="100%"
            value={networkName}
            onChange={setNetworkName}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Senha da rede</h2>
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
