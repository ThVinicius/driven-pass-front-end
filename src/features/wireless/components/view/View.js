import ViewSkeleton from '../../../../components/viewSkeleton/ViewSkeleton'
import { Container, Label, Content, Box } from './viewStyles'

export default function View({ data, children }) {
  return data !== undefined ? (
    <Container>
      <Box>
        <Label>{data.label}</Label>
        <Content>
          <h1>Nome da rede</h1>
          <h2>{data.networkName}</h2>
        </Content>
        <Content>
          <h1>Senha</h1>
          <h2>{data.password}</h2>
        </Content>
      </Box>
      {children}
    </Container>
  ) : (
    <ViewSkeleton qtd={2} />
  )
}
