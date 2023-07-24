export function generateOrderNumber(seq: number) {
  const year = new Date().getFullYear().toString().split("0");
  let month = new Date().getMonth();

  return `${year[1]}${month + 1 < 10 ? "0" + (month + 1) : month + 1}${seq}`; // mês começa com 0, ou seja, janeiro = 0
}
