export function copyToClipboard (text) {
  const input = document.createElement('input')
  input.value = text
  document.body.append(input)
  input.select()
  document.execCommand('Copy')
  input.remove()
}
