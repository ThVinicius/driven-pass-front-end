import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import { GlobalProvider } from './context/globalContext'
import Header from './components/header/Header'
import SignIn from './features/login/pages/SignIn'
import SignUp from './features/register/pages/SignUp'
import Home from './features/home/pages/Home'
import Credentials from './features/credentials/pages/Credentials'

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
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
