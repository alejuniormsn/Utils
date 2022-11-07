export default function generateId() {
  const hex = '0123456789ABCDEF'
  const model = 'xxxx-ignite-xxxxxxx'
  let str = ''
  for (let i = 0; i < model.length; i++) {
    const rnd = Math.floor(Math.random() * hex.length)
    str += model[i] === 'x' ? hex[rnd] : model[i]
  }
  return str.toLowerCase()
}
