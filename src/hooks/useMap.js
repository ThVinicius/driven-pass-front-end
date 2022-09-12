export default function useMap(array, id, setModalOpen) {
  let item = array?.find(item => item.id === id)

  if (item === undefined && array !== null) {
    item = 'Not Found'
  }

  return item
}
