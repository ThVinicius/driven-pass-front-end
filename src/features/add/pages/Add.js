import { useParams } from 'react-router-dom'
import usePersistence from '../../../hooks/usePersistence'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import useName from '../../../hooks/useName'
import Form from '../components/Form'

export default function Add() {
  const { name } = useParams()
  const path = useName(name)

  usePersistence(null, null, 'apenas pegue o token')

  return (
    <AppContainer>
      <ContentContainer>
        <Info name={path} />
        <Content>
          <Form />
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
