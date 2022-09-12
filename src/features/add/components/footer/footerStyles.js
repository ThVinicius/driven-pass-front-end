import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 11px;
`

const Submit = styled.button`
  border: none;
  background-color: inherit;
`

const Back = styled.h5`
  font: normal 400 18px 'Recursive', sans-serif;
  color: #000000;
  text-decoration-line: underline;
  cursor: pointer;
`

export { Container, Submit, Back }
