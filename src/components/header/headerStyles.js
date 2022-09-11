import styled from 'styled-components'

const Container = styled.header`
  width: 100vw;
  height: 15.53vh;
  display: flex;
  justify-content: center;
  background-color: #e9e9e9;
`

const Content = styled.header`
  width: 420px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  background-color: #ffffff;
`

const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  h1 {
    font: normal 400 36px 'Righteous', cursive;
    color: #005985;
    letter-spacing: -0.012em;
  }
`

export { Container, Content, Logo }
