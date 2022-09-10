import { useState } from 'react'

export default function useModal(initialMode = false) {
  const [modalOpen, setModalOpen] = useState(initialMode)

  return [modalOpen, setModalOpen]
}
