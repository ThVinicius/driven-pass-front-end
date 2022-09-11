import { useEffect } from 'react'
import useApi from '../../../hooks/useApi'
import { request } from '../api'
import Modal from '../../../components/modal/Modal'
import useModal from '../../../hooks/useModal'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import MyPasswords from '../components/myPasswords/MyPasswords'

export default function Home() {
  const [modalOpen, setModalOpen] = useModal()
  const [response, fetch] = useApi(setModalOpen)

  useEffect(() => {
    fetch(...request())
  }, [])

  return (
    <AppContainer>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} msg={response} />
      <ContentContainer>
        <Info name="Minhas senhas" />
        <Content>
          <MyPasswords />
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
