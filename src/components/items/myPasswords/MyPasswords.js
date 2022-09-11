import Item from '../item/Item'
import ItemSkeleton from '../item/ItemSkeleton'
import { Container, Box, Add } from './myPasswordsStyles'

const arrayNull = [
  { data: null },
  { data: null },
  { data: null },
  { data: null }
]

export default function MyPasswords({ array, icons, dir, totalSkeleton }) {
  const items =
    array !== null
      ? array.map(({ icon = icons, label, data, id, to }, index) => {
          const path = id !== undefined ? `${dir}/${id}` : to

          return (
            <Item
              icon={icon}
              name={label}
              data={data}
              skeleton={<ItemSkeleton total={totalSkeleton} />}
              to={path}
              key={index}
            />
          )
        })
      : arrayNull.map(({ data }, index) => (
          <Item
            data={data}
            skeleton={<ItemSkeleton total={totalSkeleton} />}
            key={index}
          />
        ))

  return (
    <Container>
      <Box>{items}</Box>
      <Add>
        <div>+</div>
      </Add>
    </Container>
  )
}