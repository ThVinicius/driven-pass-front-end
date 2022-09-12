import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const Title = styled.h1`
  font: normal 400 20px 'Recursive', sans-serif;
  color: #000000;
`
const InputsBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

const InputBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;

  h2 {
    font: normal 400 18px 'Recursive', sans-serif;
    color: #222222;
  }
`

export { Container, Title, InputsBox, InputBox }
