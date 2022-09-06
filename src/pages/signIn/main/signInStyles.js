import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Logo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font: normal 400 36px 'Righteous', cursive;
    color: #005985;
  }
`
const Line = styled.div`
  width: 80%;
  border: 1px solid #dbdbdb;
`

const Anchor = styled(Link)`
  font: normal 400 18px 'Recursive', sans-serif;
  color: #000000;
`

export { Logo, Line, Anchor }
