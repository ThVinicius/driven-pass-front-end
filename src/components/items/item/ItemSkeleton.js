import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Container, Title } from './itemStyles'

export default function ItemSkeleton({ total }) {
  return (
    <Container>
      <Title>
        <Skeleton circle width="55px" height="55px" />
        <h1>
          <Skeleton width={140} />
        </h1>
      </Title>
      {total && <Skeleton circle width="40px" height="40px" />}
    </Container>
  )
}
