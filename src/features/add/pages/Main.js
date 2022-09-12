import { IosExit, Pencil, Wallet, Wifi } from '../../../assets/icons/icons'
import AppContainer from '../../../containers/app/AppContainer'
import ContentContainer from '../../../containers/appContent/ContentContainer'
import Info from '../../../components/info/Info'
import Content from '../../../containers/content/Content'
import MyPasswords from '../../../components/items/myPasswords/MyPasswords'
import Footer from '../../../components/footer/Footer'

const routes = [
  { icon: <IosExit />, label: 'Credenciais', to: '/add/credentials' },
  { icon: <Pencil />, label: 'Notas seguras', to: '/add/secureNotes' },
  { icon: <Wallet />, label: 'Cartões', to: '/add/cards' },
  { icon: <Wifi />, label: 'Senhas de Wi-fi', to: '/add/wireless' }
]

export default function Add() {
  return (
    <AppContainer>
      <ContentContainer>
        <Info name="Categoria" />
        <Content>
          <MyPasswords array={routes}>
            <Footer back={true} />
          </MyPasswords>
        </Content>
      </ContentContainer>
    </AppContainer>
  )
}
