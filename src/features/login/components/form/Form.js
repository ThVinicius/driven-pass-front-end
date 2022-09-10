import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useApi from '../../../../hooks/useApi'
import { configRequest } from '../../api'
import Auth from '../../../../components/authForm/Auth'
import Modal from '../../../../components/modal/Modal'
import useModal from '../../../../hooks/useModal'

export default function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  function toSubmit(event) {
    event.preventDefault()

    const data = { email, password }

    fetch(...configRequest(data), navigate)
  }

  return (
    <>
      <Auth
        name="Acessar"
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        res={response}
        toSubmit={toSubmit}
      />
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
    </>
  )
}
