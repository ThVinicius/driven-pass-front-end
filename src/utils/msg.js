export default function msg(label, response) {
  if (response?.title === 'Deletado com sucesso!') {
    return response
  }

  const title = 'Confirme a ação de deletar'

  const message = `O registro ${label} será apagado!\nVocê confirma essa ação?`

  return { title, message }
}
