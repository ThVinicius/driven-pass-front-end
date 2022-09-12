import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import { GlobalProvider } from './context/globalContext'
import Header from './components/header/Header'
import SignIn from './features/login/pages/SignIn'
import SignUp from './features/register/pages/SignUp'
import Home from './features/home/pages/Home'
import Credentials from './features/credentials/pages/Credentials'
import SecureNotes from './features/secureNotes/pages/SecureNotes'
import Cards from './features/cards/pages/Cards'
import Wireless from './features/wireless/pages/Wireless'
import Main from './features/add/pages/Main'
import Add from './features/add/pages/Add'
import Credential from './features/credentials/pages/Credential'
import SecureNote from './features/secureNotes/pages/SecureNote'
import Card from './features/cards/pages/Card'
import WiFi from './features/wireless/pages/WiFi'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ResetCSS />
        <GlobalCSS />
        <Header />
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Home />} />
          <Route exact path="/credentials" element={<Credentials />} />
          <Route path="/secureNotes" element={<SecureNotes />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/wireless" element={<Wireless />} />
          <Route path="/add" element={<Main />} />
          <Route path="/add/:name" element={<Add />} />
          <Route exact path="/credentials/:id" element={<Credential />} />
          <Route exact path="/secureNotes/:id" element={<SecureNote />} />
          <Route exact path="/cards/:id" element={<Card />} />
          <Route exact path="/wireless/:id" element={<WiFi />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
