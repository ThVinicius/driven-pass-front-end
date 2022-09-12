import { useParams } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import useApi from '../../../hooks/useApi'
import { request } from '../../home/api'
import usePersistence from '../../../hooks/usePersistence'
import Modal from '../../../components/modal/Modal'
import useModal from '../../../hooks/useModal'
import useMap from '../../../hooks/useMap'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import Footer from '../../../components/footer/Footer'
import View from '../components/view/View'

export default function Credential() {
  const { id } = useParams()
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)
  const { global } = useGlobal()
  const data = useMap(global.myPasswords[0].data, Number(id))

  usePersistence(fetch, request(), global.myPasswords[0].data)

  return (
    <AppContainer>
      <ContentContainer>
        <Info name="Credenciais" />
        <Content>
          <View data={data}>
            <Footer back={true} modal={true} />
          </View>
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
