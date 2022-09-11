import { useState, useContext, createContext } from 'react'
import { IosExit, Pencil, Wallet, Wifi } from '../assets/icons/icons'

const GlobalContext = createContext()

const myPasswords = [
  { icon: <IosExit />, label: 'Credenciais', data: null, to: '/credentials' },
  { icon: <Pencil />, label: 'Notas seguras', data: null, to: '/secureNotes' },
  { icon: <Wallet />, label: 'Cartões', data: null, to: '/cards' },
  { icon: <Wifi />, label: 'Senhas de Wi-fi', data: null, to: '/wireless' }
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
