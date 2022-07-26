export const currencyFormatter = (value, type = "normal") => {
  if (type === "real") {
    return (
      value.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL"
      }) || ""
    );
  }

  return value.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
  
}