import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

const Label = styled.h1`
  font: normal 400 20px 'Recursive', sans-serif;
  color: #222222;
`
const Content = styled.div`
  h1 {
    font: normal 700 20px 'Recursive', sans-serif;
    color: #222222;
  }

  h2 {
    font: normal 400 20px 'Recursive', sans-serif;
    color: #222222;
  }
`

export { Container, Label, Content, Box }
