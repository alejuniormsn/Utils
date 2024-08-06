const convertValue = (value) => {
  const result =
    value.substring(0, value.length - 2) +
    "," +
    value.substring(value.length - 2, value.length);
  return result;
};

module.exports = { convertValue };
