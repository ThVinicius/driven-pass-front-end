import styled from 'styled-components'
import { IoLockClosed, IoExit } from 'react-icons/io5'

const LockClosed = styled(IoLockClosed)`
  width: ${props => props.width || '113px'};
  height: ${props => props.height || '154px'};
  color: #005985;
`
const Exit = styled(IoExit)`
  width: 53px;
  height: 60px;
  color: #005985;
`

export { LockClosed, Exit }
