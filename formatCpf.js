export const formatCpf = (values => {
  
  const badChars = /[^\d]/g;
  const mask = /(\d{3})(\d{3})(\d{3})(\d{2})/;
  const cpf = new String(values).replace(badChars, "");
  
  return cpf.replace(mask, "$1.$2.$3-$4");

})