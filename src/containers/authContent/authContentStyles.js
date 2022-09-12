import styled from 'styled-components'

const Container = styled.div`
  width: 420px;
  height: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: relative;

  @media (max-width: 420px) {
    width: 100vw;
  }
`
export { Container }
