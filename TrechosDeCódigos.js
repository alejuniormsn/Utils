// Redirect URL
window.location.replace(response.redirectURL);

// biblioteca JavaScript lidar com datas
package.json
"moment": "^2.29.1"
import moment from "moment";
const dateFrom = moment(dateFrom);

// Uso do LocalStorage e do SessionStorage do Browser
localStorage.setItem("chave", "Valor");
localStorage.getItem("nome da chave");
localStorage.removeItem("nome da chave");
localStorage.clear(); // limpa localStorage
const obj = {
  name: "Ale",
  age: 37
};
localStorage.setItem("obj", JSON.stringify(obj));
const recuperaObj = JSON.parse(localStorage.getItem("obj"));

// Formatter de data
const formater = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD"
});
setAmount(formatter.format(valor).toString().replace(/\D/g, "")); //regex deixa só números

// Envelope resposta API
{
  "statusCode": 404,
  "errors": [
    {
      "errorCode": "ER-2022404",
      "message": "NOTFOUND the register"
    }
  ],
  "body": []
}

// 