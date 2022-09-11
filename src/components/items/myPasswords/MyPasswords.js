import Item from '../item/Item'
import ItemSkeleton from '../item/ItemSkeleton'
import { Container, Box, Add } from './myPasswordsStyles'

export default function MyPasswords({ array, icons, dir }) {
  const items = array.map(({ icon = icons, label, data, id, to }, index) => {
    const path = id !== undefined ? `${dir}/${id}` : to

    return (
      <Item
        icon={icon}
        name={label}
        data={data}
        skeleton={<ItemSkeleton data={data} />}
        to={path}
        key={index}
      />
    )
  })

  return (
    <Container>
      <Box>{items}</Box>
      <Add>
        <div>+</div>
      </Add>
    </Container>
  )
}
