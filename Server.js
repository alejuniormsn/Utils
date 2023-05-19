import http from "node:http";

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application/json")
      .end(JSON.stringify(users));
  }

  if (method === "POST" && url === "/users") {
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@email.com",
    });
    return res
      .setHeader("Content-type", "application/json")
      .writeHead(201)
      .end("Usuário criado com sucesso.");
  }

  return res.writeHead(404).end("Rota não encontrada.");
});

console.log("Servidor escutando no endereço: localhost:3333");

server.listen(3333);
