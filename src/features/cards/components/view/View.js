import ViewSkeleton from '../../../../components/viewSkeleton/ViewSkeleton'
import { Container, Label, Content, Box } from './viewStyles'

export default function View({ data, children }) {
  return data !== undefined ? (
    <Container>
      <Box>
        <Label>{data.label}</Label>
        <Content>
          <h1>URL</h1>
          <h2>{data.url}</h2>
        </Content>
        <Content>
          <h1>Número do cartão</h1>
          <h2>{data.number}</h2>
        </Content>
        <Content>
          <h1>Nome do titular</h1>
          <h2>{data.cardholderName}</h2>
        </Content>
        <Content>
          <h1>Código de segurança</h1>
          <h2>{data.securityCode}</h2>
        </Content>
        <Content>
          <h1>Data de expiração</h1>
          <h2>{data.expirationDate}</h2>
        </Content>
        <Content>
          <h1>Senha</h1>
          <h2>{data.password}</h2>
        </Content>
        <Content>
          <h1>Cartão virtual?</h1>
          <h2>{data.isVirtual ? 'Sim' : 'Não'}</h2>
        </Content>
        <Content>
          <h1>Tipo do cartão</h1>
          <h2>{type(data.type)}</h2>
        </Content>
      </Box>
      {children}
    </Container>
  ) : (
    <ViewSkeleton qtd={8} />
  )
}

const type = type => {
  switch (type) {
    case 'credit':
      return 'Crédito'

    case 'debit':
      return 'Débito'

    case 'credit_and_debit':
      return 'Crédito e débito'

    default:
      return ''
  }
}
