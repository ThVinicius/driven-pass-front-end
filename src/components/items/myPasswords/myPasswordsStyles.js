import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
`

const Add = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  padding: 0 11px;

  div {
    width: 61px;
    height: 61px;
    border-radius: 35px;
    background-color: #005985;
    font: normal 400 58px 'Recursive', sans-serif;
    color: #ffffff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

const Anchor = styled(Link)`
  text-decoration: none;
`

export { Container, Box, Add, Anchor }
