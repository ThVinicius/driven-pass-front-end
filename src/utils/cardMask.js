export function maskNumber(value) {
  return value
    .replace(/[^0-9\s]/g, '')
    .replace(/^(\d{4})(\d)$/, '$1 $2')
    .replace(/^(\d{4}\s\d{4})(\d)$/, '$1 $2')
    .replace(/^(\d{4}\s\d{4}\s\d{4})(\d)$/, '$1 $2')
}

export function maskExpiration(value) {
  return value.replace(/\D/g, '').replace(/^(\d{2})(\d)/, '$1/$2')
}
