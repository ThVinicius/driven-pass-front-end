import { useGlobal } from '../../../../context/globalContext'
import Item from '../item/Item'
import { Container, Box, Add } from './myPasswordsStyles'

export default function MyPasswords() {
  const { global } = useGlobal()

  return (
    <Container>
      <Box>
        {global.myPasswords.map(({ icon, name, length }, index) => (
          <Item icon={icon} name={name} length={length} key={index} />
        ))}
      </Box>
      <Add>
        <div>+</div>
      </Add>
    </Container>
  )
}
