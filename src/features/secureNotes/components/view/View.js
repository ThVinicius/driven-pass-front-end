import ViewSkeleton from '../../../../components/viewSkeleton/ViewSkeleton'
import { Container, Label, Content, Box } from './viewStyles'

export default function View({ data, children }) {
  return data !== undefined ? (
    <Container>
      <Box>
        <Label>{data.label}</Label>
        <Content>
          <h1>Título</h1>
          <h2>{data.title}</h2>
        </Content>
        <Content>
          <h1>Anotação</h1>
          <h2>{data.annotation}</h2>
        </Content>
      </Box>
      {children}
    </Container>
  ) : (
    <ViewSkeleton qtd={2} />
  )
}
