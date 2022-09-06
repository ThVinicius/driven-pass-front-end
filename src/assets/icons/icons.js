import styled from 'styled-components'
import { IoLockClosed } from 'react-icons/io5'

const LockClosed = styled(IoLockClosed)`
  width: ${props => props.width || '113px'};
  height: ${props => props.height || '154px'};
  color: #005985;
`
export { LockClosed }
