import { useGlobal } from '../../../context/globalContext'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import MyPasswords from '../components/myPasswords/MyPasswords'

export default function Home() {
  const { global } = useGlobal()

  return (
    <AppContainer>
      <ContentContainer>
        <Info name="Minhas senhas" />
        <Content>
          <MyPasswords />
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
