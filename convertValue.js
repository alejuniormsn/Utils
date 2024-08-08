const convertValue = (value) => {
  const result =
    value.substring(0, value.length - 2) +
    "." +
    value.substring(value.length - 2, value.length);
  return parseFloat(result);
};

const convertValueRef = (value) => {
  const result = value.replace(",", ".");
  return parseFloat(result);
};

const currency = (value) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
  });
  return formatter.format(value);
};
// 06022024
const formatDate = (str) => {
  return (
    str.substring(0, 2) + "/" + str.substring(2, 4) + "/" + str.substring(4, 8)
  );
};
// 022024
const formatDateComp = (str) => {
  return str.substring(0, 2) + "/" + str.substring(2, 6);
};

module.exports = {
  convertValue,
  convertValueRef,
  currency,
  formatDate,
  formatDateComp,
};
