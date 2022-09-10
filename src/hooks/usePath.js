import { useLocation } from 'react-router-dom'

export default function usePath() {
  let isAuth = false

  const { pathname } = useLocation()

  if (pathname === '/' || pathname.toLowerCase() === '/signup') isAuth = true

  return { isAuth }
}
