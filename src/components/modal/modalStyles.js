import styled from 'styled-components'

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  border: 1px solid #dbdbdb;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Content = styled.div`
  width: 95%;
  height: 45%;
  background-color: #ffffff;
  border: 1px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  h1 {
    font: normal 700 18px 'Recursive', sans-serif;
    color: #000000;
  }

  h2 {
    font: normal 400 18px 'Recursive', sans-serif;
    color: #000000;
  }
`

const Description = styled.div`
  width: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  text-align: center;
`

export { Container, Content, Description }
