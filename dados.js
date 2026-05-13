const fs = require("fs");


let dados = fs.readFileSync("produtos.json");
let produtos = JSON.parse(dados);

module.exports = produtos;