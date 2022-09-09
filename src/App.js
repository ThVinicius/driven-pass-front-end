import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import { GlobalProvider } from './context/globalContext'
import SignIn from './features/login/pages/SignIn'

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <ResetCSS />
        <GlobalCSS />
        <Routes>
          <Route path="/" element={<SignIn />} />
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}
