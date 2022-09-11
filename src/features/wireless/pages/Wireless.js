import { useGlobal } from '../../../context/globalContext'
import useApi from '../../../hooks/useApi'
import { request } from '../../home/api'
import usePersistence from '../../../hooks/usePersistence'
import Modal from '../../../components/modal/Modal'
import useModal from '../../../hooks/useModal'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import MyPasswords from '../../../components/items/myPasswords/MyPasswords'
import { Wifi } from '../../../assets/icons/icons'

export default function Wireless() {
  const { global } = useGlobal()
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  usePersistence(fetch, request(), global.myPasswords[3].data)

  return (
    <AppContainer>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
      <ContentContainer>
        <Info name="Meus WiFi" />
        <Content>
          <MyPasswords
            array={global.myPasswords[3].data}
            icons={<Wifi />}
            dir="/wireless"
            totalSkeleton={false}
          />
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
