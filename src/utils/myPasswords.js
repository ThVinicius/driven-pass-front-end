import { IosExit, Pencil, Wallet, Wifi } from '../assets/icons/icons'

const myPasswords = [
  { icon: <IosExit />, label: 'Credenciais', data: null, to: '/credentials' },
  { icon: <Pencil />, label: 'Notas seguras', data: null, to: '/secureNotes' },
  { icon: <Wallet />, label: 'Cartões', data: null, to: '/cards' },
  { icon: <Wifi />, label: 'Senhas de Wi-fi', data: null, to: '/wireless' }
]

export default myPasswords
