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
import Add from './features/add/pages/Add'

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
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/secureNotes" element={<SecureNotes />} />
          <Route path="/cards" element={<Cards />} />
          <Route path="/wireless" element={<Wireless />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
