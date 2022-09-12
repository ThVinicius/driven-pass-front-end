import { useEffect } from 'react'

export default function useClean(array, listen) {
  useEffect(() => {
    if (listen?.title === 'Muito bem!') {
      for (const input of array) {
        input('')
      }
    }
  }, [listen])
}
