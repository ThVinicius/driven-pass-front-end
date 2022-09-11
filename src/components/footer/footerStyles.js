import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: ${props => (props.justifyContent ? 'space-between' : 'end')};
  align-items: center;
  padding: 0 11px;
`

const Add = styled.div`
  width: 61px;
  height: 61px;
  border-radius: 35px;
  background-color: #005985;
  font: normal 400 58px 'Recursive', sans-serif;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Anchor = styled(Link)`
  text-decoration: none;
`

const Back = styled.h5`
  font: normal 400 18px 'Recursive', sans-serif;
  color: #000000;
  text-decoration-line: underline;
  cursor: pointer;
`

export { Container, Anchor, Add, Back }
