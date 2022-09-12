export default function useMap(array, id) {
  return array?.find(item => item.id === id)
}
