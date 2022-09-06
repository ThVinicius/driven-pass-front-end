import AppContainer from '../app/AppContainer'
import { Container } from './contentStyles'

export default function ContentContainer({ children }) {
  return (
    <AppContainer>
      <Container>{children}</Container>
    </AppContainer>
  )
}
