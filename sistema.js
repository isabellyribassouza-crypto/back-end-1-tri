const fs = require("fs");
let produtos = require("./dados");



function mostrar() {
  console.log(produtos);
}



function adicionar() {
  let novo = {
    id: 11,
    nome: "Chocolate",
    preco: 7,
    marca: "DDDDD",
    estoque: 20,
    codigo: "8463"
  };

  produtos.push(novo);
  fs.writeFileSync("produtos.json", JSON.stringify(produtos));
}



function filtrar() {
  let baratos = produtos.filter(p => p.preco < 10);
  console.log(baratos);
}



function desconto() {
  produtos.forEach(p => {
    p.preco = p.preco * 0.9;
  });

  fs.writeFileSync("produtos.json", JSON.stringify(produtos));
}



function buscar() {
  let achado = produtos.find(p => p.nome === dados.js);
  console.log(achado);
}


mostrar();
adicionar();
filtrar();
desconto();
buscar();