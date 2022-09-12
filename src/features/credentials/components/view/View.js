import ViewSkeleton from './viewSkeleton'
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
          <h1>Usuário</h1>
          <h2>{data.username}</h2>
        </Content>
        <Content>
          <h1>Senha</h1>
          <h2>{data.password}</h2>
        </Content>
      </Box>
      {children}
    </Container>
  ) : (
    <ViewSkeleton />
  )
}
