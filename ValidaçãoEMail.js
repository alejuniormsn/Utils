function validaEmail(str) {
  const reg = /^[a-zA-Z0-9_.]+[@]([a-z]+[.])+[a-z]{2,3}$/gm;

  return str.match(reg) ? 'Este e-mail é válido!' : 'Este e-mail NÃO é válido!';
}

const array = [
  'Joao@unicamp.br',
  'ale.mi@gmail.com.br',
  'alguem@orgao.uf.gov.br',
  'Foo.bar__12@gmail.com',
  'Foo.bar__12@gmail.com.br',
  'foo.bar@gmail.br',
  'foo.bar@gmail.com.b',
  '@gmail.com',
  'foo.barGmail.com',
  'foo.bar@gmail.com.br.br',
  'foo.bar@gmail.com.br foo.bar@gmail.com.br',
];
for (let index = 0; index < array.length; index++) {
  console.log(`Item ${index} - ${array[index]} ==> ${validaEmail(array[index])}`)
};
