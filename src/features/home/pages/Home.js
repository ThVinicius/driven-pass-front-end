import { useGlobal } from '../../../context/globalContext'
import useApi from '../../../hooks/useApi'
import { request } from '../api'
import usePersistence from '../../../hooks/usePersistence'
import Modal from '../../../components/modal/main/Modal'
import useModal from '../../../hooks/useModal'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import MyPasswords from '../../../components/items/myPasswords/MyPasswords'
import Footer from '../../../components/footer/Footer'

export default function Home() {
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)
  const { global } = useGlobal()

  usePersistence(fetch, request(), global.myPasswords[0].data)

  return (
    <AppContainer>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
      <ContentContainer>
        <Info name="Minhas senhas" />
        <Content>
          <MyPasswords array={global.myPasswords} totalSkeleton={true}>
            <Footer />
          </MyPasswords>
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
