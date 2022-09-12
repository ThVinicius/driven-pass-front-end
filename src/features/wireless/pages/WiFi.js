import { useParams } from 'react-router-dom'
import { useGlobal } from '../../../context/globalContext'
import useApi from '../../../hooks/useApi'
import { request } from '../../home/api'
import { configRequest } from '../api'
import usePersistence from '../../../hooks/usePersistence'
import Modal from '../../../components/modal/main/Modal'
import useModal from '../../../hooks/useModal'
import useMap from '../../../hooks/useMap'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import Footer from '../../../components/footer/Footer'
import View from '../components/view/View'
import msg from '../../../utils/msg'
import page from '../../../assets/images/page.png'

export default function WiFi() {
  const { id } = useParams()
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)
  const { global } = useGlobal()
  const data = useMap(global.myPasswords[3].data, Number(id))

  usePersistence(fetch, request(), global.myPasswords[3].data)

  return (
    <AppContainer>
      <Modal
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
        msg={msg(data?.label, response)}
        fetch={fetch}
        id={data?.id}
        req={configRequest}
      />
      <ContentContainer>
        <Info name="Wireless" />
        <Content>
          {data !== 'Not Found' ? (
            <View data={data}>
              <Footer back={true} modal={setModalOpen} />
            </View>
          ) : (
            <img
              style={{ width: '100%', height: '100%' }}
              src={page}
              alt="Not Found"
            />
          )}
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
