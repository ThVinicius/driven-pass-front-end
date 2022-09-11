import { useState, useContext, createContext } from 'react'
import { IosExit, Pencil, Wallet, Wifi } from '../assets/icons/icons'

const GlobalContext = createContext()

const myPasswords = [
  { icon: <IosExit />, length: 1, name: 'Credenciais' },
  { icon: <Pencil />, length: 2, name: 'Notas seguras' },
  { icon: <Wallet />, length: 3, name: 'Cartões' },
  { icon: <Wifi />, length: 4, name: 'Senhas de Wi-fi' }
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
