function validarCPF(inputCPF) {
  let soma = 0;
  let resto;
  const badChars = /[^\d]/g;
  let cpf = new String(inputCPF).replace(badChars, "");

  if (cpf == '00000000000') return false;
  for (i = 1; i <= 9; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(cpf.substring(9, 10))) return false;

  soma = 0;
  for (i = 1; i <= 10; i++) soma = soma + parseInt(cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(cpf.substring(10, 11))) return false;
  return true;
}

const array = [
  '139.819.908-70',
  '(11)96054-7776',
  'alejunior@msn.com'
];
for (let index = 0; index < array.length; index++) {
  console.log(`Item ${index} - ${array[index]} ==> ${validarCPF(array[index])}`)
};