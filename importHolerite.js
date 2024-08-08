const fs = require("fs");
const { convertValue, convertValueRef } = require("../../util/convertValue");
const env = require("../../../.env");

// Função para ler e converter arquivo txt para JSON
const filePath = env.SOURCE_FILE_TXT;

const holerite = () => {
  try {
    // Lê o arquivo
    const data = fs.readFileSync(filePath, "utf8");

    // Divide o conteúdo do arquivo em linhas
    const lines = data.split("\n");

    const jsonData = [];
    let record = {};
    let description = [];
    lines.forEach((line) => {
      if (line.trim() === "") return; // Ignora linhas vazias
      if (line.substring(0, 8) != "34100013") return; //  Ignora cabeçalho e rodapé
      if (line.substring(13, 14) == "A") {
        record = {
          userId: parseInt(line.substring(9, 13)),
          matricula: line.substring(73, 79),
          nome: line.substring(43, 73).trim(),
          cpf: line.substring(204, 217),
          totalLiqu: convertValue(line.substring(120, 134)),
          dataPagto: line.substring(93, 101),
        };
      }
      if (line.substring(13, 14) == "D") {
        record = {
          ...record,
          dataCompet: line.substring(17, 23),
          func: line.substring(53, 83).trim(),
          totalVenc: convertValue(line.substring(136, 150)),
          totalDesc: convertValue(line.substring(151, 165)),
          salBase: convertValue(line.substring(181, 195)),
          baseInss: convertValue(line.substring(106, 120)),
          baseFgts: convertValue(line.substring(211, 225)),
          fgtsMes: convertValue(line.substring(121, 135)),
          baseCalcIrf: convertValue(line.substring(196, 210)),
        };
      }
      if (line.substring(13, 14) == "E") {
        description.push({
          codOp: parseInt(line.substring(15, 18)),
          history: line.substring(18, 38).trim(),
          ref: convertValueRef(line.substring(39, 48).trim()),
          valor: convertValue(line.substring(54, 68)),
        });
      }
      //Fim do item
      if (line.substring(13, 14) == "F") {
        jsonData.push({ ...record, description });
        record = {};
        description = [];
      }
    });

    // Converte o array de objetos em JSON
    const jsonOutput = JSON.stringify(jsonData, null, 2);

    // Opcional: Salvar o JSON em um arquivo
    fs.writeFileSync("output.json", jsonOutput);
    // console.log("JSON salvo em output.json");
    // return jsonOutput;
  } catch (error) {
    console.error("Erro ao ler o arquivo:", error);
  }
};
holerite();
// module.exports = { holerite };
