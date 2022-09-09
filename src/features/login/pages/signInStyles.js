import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Line = styled.div`
  width: 80%;
  border: 1px solid #dbdbdb;
`

const Anchor = styled(Link)`
  font: normal 400 18px 'Recursive', sans-serif;
  color: #000000;
`

export { Line, Anchor }
