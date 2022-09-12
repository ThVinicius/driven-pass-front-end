import { useState, useContext, createContext } from 'react'
import myPasswords from '../utils/myPasswords'

const GlobalContext = createContext()

export function GlobalProvider({ children }) {
  const [global, setGlobal] = useState({ token: null, myPasswords })

  return (
    <GlobalContext.Provider value={{ global, setGlobal }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobal = () => useContext(GlobalContext)
