import { Container, Title, Ellipse, Anchor } from './itemStyles'

export default function Item({ icon, name, data, skeleton, to }) {
  return data !== null ? (
    <Anchor to={to}>
      <Container>
        <Title>
          {icon}
          <h1>{name}</h1>
        </Title>
        {data !== undefined && <Ellipse>{data?.length}</Ellipse>}
      </Container>
    </Anchor>
  ) : (
    skeleton
  )
}
