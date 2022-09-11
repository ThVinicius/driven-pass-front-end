import { Container, Title, Ellipse } from './itemStyles'

export default function Item({ icon, name, data, skeleton }) {
  return data !== null ? (
    <Container>
      <Title>
        {icon}
        <h1>{name}</h1>
      </Title>
      <Ellipse>{data?.length}</Ellipse>
    </Container>
  ) : (
    skeleton
  )
}
