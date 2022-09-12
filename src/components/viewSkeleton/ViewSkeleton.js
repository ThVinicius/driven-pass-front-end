import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { Container, Label, Content, Box } from './viewStyles'

export default function ViewSkeleton({ qtd }) {
  return (
    <Container>
      <Box>
        <Label>
          <Skeleton width={70} />
        </Label>
        {[...Array(qtd)].map((_, index) => (
          <Content key={index}>
            <h1>
              <Skeleton width={70} />
            </h1>
            <h2>
              <Skeleton width={200} />
            </h2>
          </Content>
        ))}
      </Box>
    </Container>
  )
}
