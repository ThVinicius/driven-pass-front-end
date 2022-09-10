import styled from 'styled-components'

const Container = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 32px;
`

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  h6 {
    font: normal 400 18px 'Recursive', sans-serif;
    color: #000000;
  }
`

export { Container, Box, ButtonContainer }
