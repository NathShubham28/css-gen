export function copyToClipboard (text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  document.body.append(textArea)
  textArea.select()
  document.execCommand('Copy')
  textArea.remove()
}
