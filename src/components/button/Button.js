import { Container } from './styles'

export default function Button(props) {
  const { width = '66.66%', height = '40px', loading = false } = props
  const { backgroundColor = '#9BFBB0', borderRadius = '5px', name } = props
  const { font = "normal 400 18px 'Recursive', sans-serif" } = props
  const { border = '3px solid #9BFBB0' } = props
  const { boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.15)' } = props
  const { nameLoading, color = '#000000', click = null } = props

  function loadingButton() {
    if (loading === false) return { opacity: 1, name }

    return {
      opacity: 0.7,
      name: nameLoading
    }
  }

  return (
    <Container
      onClick={click}
      type="submit"
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      border={border}
      boxShadow={boxShadow}
      color={color}
      opacity={loadingButton().opacity}
      borderRadius={borderRadius}
      font={font}
    >
      {loadingButton().name}
    </Container>
  )
}
