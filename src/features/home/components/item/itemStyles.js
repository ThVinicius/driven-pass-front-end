import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 25px;

  h1 {
    font: normal 400 18px 'Recursive', sans-serif;
    color: #222222;
  }
`

const Ellipse = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 25px;
  background-color: #005985;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  font: normal 400 18px 'Recursive', sans-serif;
`

export { Container, Title, Ellipse }
