function gerarNumero() {
  const year = new Date().getFullYear().toString().split("0")
  let month = new Date().getMonth()
  const seq = (Math.random() * 1000).toFixed(0)

  console.log(`${year[1]}${month < 10 ? month = "0" + (month + 1) : 0}${seq}`)
}

gerarNumero(); // Ano YY + mês MM + aleatório de 3 dígitos.