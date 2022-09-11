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
import { Wallet } from '../../../assets/icons/icons'

export default function Cards() {
  const { global } = useGlobal()
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  usePersistence(fetch, request(), global.myPasswords[2].data)

  return (
    <AppContainer>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
      <ContentContainer>
        <Info name="Meus cartões" />
        <Content>
          <MyPasswords
            array={global.myPasswords[2].data}
            icons={<Wallet />}
            dir="/cards"
            totalSkeleton={false}
          />
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
