import { useState } from 'react'
import Button from '../../button/Button'
import { Box } from './removeStyles'

export default function Remove({ ok, fetch, id, req }) {
  const [loading, setLoading] = useState(false)

  function okLoading() {
    if (loading) return

    return ok()
  }

  function remove() {
    if (loading === true) return
    setLoading(true)

    fetch(...req(id))
  }

  return (
    <Box>
      <Button
        width="40%"
        backgroundColor="red"
        border="3px solid red"
        name="Cancelar"
        click={okLoading}
      />
      <Button width="40%" name="Deletar" click={remove} />
    </Box>
  )
}
