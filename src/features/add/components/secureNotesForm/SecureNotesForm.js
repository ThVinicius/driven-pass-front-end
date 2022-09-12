import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import { request } from './api'
import useModal from '../../../../hooks/useModal'
import Modal from '../../../../components/modal/main/Modal'
import useClean from '../../../../hooks/useClean'
import { Container, Title, InputsBox, InputBox } from './formStyles'
import Input from '../../../../components/input/Input'
import Footer from '../footer/Footer'

export default function SecureNotesForm() {
  const [label, setLabel] = useState('')
  const [title, setTitle] = useState('')
  const [annotation, setAnnotation] = useState('')
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  useClean([setLabel, setTitle, setAnnotation], response)

  const submit = event => {
    event.preventDefault()

    const data = { label, title, annotation }

    fetch(...request(data))
  }

  return (
    <Container onSubmit={submit}>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
      <InputsBox>
        <Title>Cadastro</Title>
        <InputBox>
          <h2>Rótulo</h2>
          <Input
            width="100%"
            value={label}
            onChange={setLabel}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Título</h2>
          <Input
            width="100%"
            maxLength={50}
            value={title}
            onChange={setTitle}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Anotação</h2>
          <Input
            width="100%"
            maxLength={1000}
            value={annotation}
            onChange={setAnnotation}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
      </InputsBox>
      <Footer loading={response === 'loading' ? true : false} />
    </Container>
  )
}
