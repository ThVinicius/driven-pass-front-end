import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ResetCSS from './assets/css/reset'
import GlobalCSS from './assets/css/global'
import SignIn from './pages/signIn/main/SignIn'
import SignUp from './pages/signUp/main/SignUp'

export default function App() {
  return (
    <BrowserRouter>
      <ResetCSS />
      <GlobalCSS />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}
