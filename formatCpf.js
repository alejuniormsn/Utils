function formatCpf() {
  const cpfIn = '139.819+908---70(123*)';
  const badChars = /[^\d]/g;
  const mask = /^(\d{3})(\d{3})(\d{3})(\d{2})\d+/;
  const cpf = new String(cpfIn).replace(badChars, "").replace(mask, "$1.$2.$3-$4");

  console.log(cpf);

}

formatCpf();