import { Container } from './styles'

export default function Input(props) {
  const { type = 'text', width = '66.66%', height = '40px' } = props
  const { loading = false, minLength = '', maxLength = '' } = props
  const { border = '3px solid #005985', borderRadius = '5px' } = props
  const { backGround = '#ffffff', color = '#9F9F9F', required = true } = props
  const { padding = 'none', image = null } = props
  const { reference = null, eventKey = null } = props
  const { backgroundPosition = '98.5% 50%' } = props
  const { placeholder, value, onChange } = props
  const { boxShadow = '0px 4px 4px rgba(0, 0, 0, 0.15)' } = props

  function loadingInput() {
    if (loading === false) return { backGround, disabled: false }

    return { backGroundLoading: '#F2F2F2', disabled: true }
  }

  const { backGroundLoading, disabled } = loadingInput()

  return (
    <Container
      ref={reference}
      onKeyDown={eventKey}
      height={height}
      width={width}
      padding={padding}
      backGround={backGroundLoading}
      type={type}
      required={required}
      minLength={minLength}
      maxLength={maxLength}
      border={border}
      color={color}
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      disabled={disabled}
      placeholder={placeholder}
      style={{ backgroundImage: `url(${image})` }}
      backgroundPosition={backgroundPosition}
      value={value}
      onChange={e => onChange(e.target.value)}
    />
  )
}
