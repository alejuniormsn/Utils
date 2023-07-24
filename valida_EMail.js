function validaEmail(str) {

  const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/

  return str.match(reg) ? true : false;
}

const array = [
  'Joao@unicamp.br',
  'ale.mi@gmail.com.br',
  'alguem@orgao.uf.gov.br',
  'Foo.bar__12@gmail.com',
  'Foo.bar__12@gmail.com.br',
  'foo.bar@gmail.br',
  'foo.bar@gmail.com.br.br',
  'foo.bar@gmail.com.b',
  '@gmail.com',
  'foo.barGmail.com',
  'foo.bar@Gmail.com',
  'foo.bar@gmail.com.br foo.bar@gmail.com.br',
  'alguem.silva@orgao.uf.gov.br',
  'foo.bar-never_false@gmail.com',
];
for (let index = 0; index < array.length; index++) {
  console.log(`Item ${index} - ${array[index]} ==> ${validaEmail(array[index])}`)
};
