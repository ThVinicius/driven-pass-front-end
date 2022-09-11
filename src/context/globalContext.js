import { useState, useContext, createContext } from 'react'
import { IosExit, Pencil, Wallet, Wifi } from '../assets/icons/icons'

const GlobalContext = createContext()

const myPasswords = [
  { icon: <IosExit />, name: 'Credenciais', data: null },
  { icon: <Pencil />, name: 'Notas seguras', data: null },
  { icon: <Wallet />, name: 'Cartões', data: null },
  { icon: <Wifi />, name: 'Senhas de Wi-fi', data: null }
]

export function GlobalProvider({ children }) {
  const [global, setGlobal] = useState({ token: null, myPasswords })

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
