import { Container, Title, Ellipse } from './itemStyles'

export default function Item({ icon, name, length }) {
  return (
    <Container>
      <Title>
        {icon}
        <h1>{name}</h1>
      </Title>
      <Ellipse>{length}</Ellipse>
    </Container>
  )
}
