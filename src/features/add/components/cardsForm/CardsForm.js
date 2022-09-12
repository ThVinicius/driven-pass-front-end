import { useState } from 'react'
import useApi from '../../../../hooks/useApi'
import { request } from './api'
import useModal from '../../../../hooks/useModal'
import Modal from '../../../../components/modal/main/Modal'
import useClean from '../../../../hooks/useClean'
import { Container, Title, InputsBox, InputBox, Radio } from './formStyles'
import Input from '../../../../components/input/Input'
import InputIcon from '../../../../components/inputIcon/InputIcon'
import Footer from '../footer/Footer'
import { maskNumber, maskExpiration } from '../../../../utils/cardMask'

export default function CardsForm() {
  const [label, setLabel] = useState('')
  const [number, setNumber] = useState('')
  const [cardholderName, setCardholderName] = useState('')
  const [securityCode, setSecurityCode] = useState('')
  const [expirationDate, setExpirationDate] = useState('')
  const [virtual, setVirtual] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  useClean(
    [
      setLabel,
      setNumber,
      setCardholderName,
      setSecurityCode,
      setExpirationDate,
      setVirtual,
      setPassword
    ],
    response
  )

  const submit = event => {
    event.preventDefault()

    const isVirtual = Boolean(Number(virtual))

    const data = {
      label,
      number,
      cardholderName,
      securityCode,
      expirationDate,
      password,
      isVirtual,
      type
    }

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
          <h2>Número do cartão</h2>
          <Input
            width="100%"
            maxLength={19}
            minLength={19}
            value={maskNumber(number)}
            onChange={setNumber}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Nome do titular do cartão</h2>
          <Input
            width="100%"
            value={cardholderName}
            onChange={setCardholderName}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Código de segurança</h2>
          <Input
            width="100%"
            maxLength={3}
            minLength={3}
            value={securityCode}
            onChange={setSecurityCode}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Data de expiração</h2>
          <Input
            width="100%"
            value={maskExpiration(expirationDate)}
            maxLength={5}
            minLength={5}
            onChange={setExpirationDate}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Cartão virtual?</h2>
          <Radio>
            <input
              type="radio"
              name="virtual"
              required
              id="true"
              value={'1'}
              onChange={e => setVirtual(e.target.value)}
            />
            <label htmlFor="true">Sim</label>
            <input
              type="radio"
              name="virtual"
              id="false"
              value={'0'}
              onChange={e => setVirtual(e.target.value)}
            />
            <label htmlFor="false">Não</label>
          </Radio>
        </InputBox>
        <InputBox>
          <h2>Senha</h2>
          <InputIcon
            width="100%"
            value={password}
            maxLength={4}
            minLength={6}
            onChange={setPassword}
            loading={response === 'loading' ? true : false}
          />
        </InputBox>
        <InputBox>
          <h2>Tipo do cartão</h2>
          <Radio>
            <input
              type="radio"
              name="type"
              required
              id="debit"
              value="debit"
              onChange={e => setType(e.target.value)}
            />
            <label htmlFor="true">Débito</label>
            <input
              type="radio"
              name="type"
              id="credit"
              value="credit"
              onChange={e => setType(e.target.value)}
            />
            <label htmlFor="credit">Crédito</label>
            <input
              type="radio"
              name="type"
              id="credit_and_debit"
              value="credit_and_debit"
              onChange={e => setType(e.target.value)}
            />
            <label htmlFor="credit_and_debit">Débito e crédito</label>
          </Radio>
        </InputBox>
      </InputsBox>
      <Footer loading={response === 'loading' ? true : false} />
    </Container>
  )
}
