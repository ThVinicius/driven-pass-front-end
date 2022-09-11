import { useGlobal } from '../../../../context/globalContext'
import Item from '../item/Item'
import ItemSkeleton from '../item/ItemSkeleton'
import { Container, Box, Add } from './myPasswordsStyles'

export default function MyPasswords() {
  const { global } = useGlobal()

  return (
    <Container>
      <Box>
        {global.myPasswords.map(({ icon, name, data }, index) => (
          <Item
            icon={icon}
            name={name}
            data={data}
            skeleton={<ItemSkeleton />}
            key={index}
          />
        ))}
      </Box>
      <Add>
        <div>+</div>
      </Add>
    </Container>
  )
}
