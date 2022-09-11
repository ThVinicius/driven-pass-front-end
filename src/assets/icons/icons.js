import styled from 'styled-components'
import {
  IoLockClosed,
  IoExit,
  IoPencil,
  IoWallet,
  IoWifi
} from 'react-icons/io5'
import { IoIosExit } from 'react-icons/io'

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

const IosExit = styled(IoIosExit)`
  width: 55px;
  height: 55px;
  color: #005985;
`

const Pencil = styled(IoPencil)`
  width: 55px;
  height: 55px;
  color: #005985;
`

const Wallet = styled(IoWallet)`
  width: 55px;
  height: 55px;
  color: #005985;
`

const Wifi = styled(IoWifi)`
  width: 55px;
  height: 55px;
  color: #005985;
`

export { LockClosed, Exit, IosExit, Pencil, Wallet, Wifi }
