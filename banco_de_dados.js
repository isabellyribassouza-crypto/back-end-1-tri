const produtos = require("./produtos.json")

let produtos = [
  { id: 1, nome: "morango", preco: 6.00, marca: "AAAA", estoque: 7, codigo: "3847" },
  { id: 2, nome: "manga", preco: 4.00, marca: "BBBB", estoque: 15, codigo: "8594" },
  { id: 3, nome: "maça", preco: 11.00, marca: "CCCC", estoque: 60, codigo: "8573" },
  { id: 4, nome: "banana", preco: 6.00, marca: "DDDD", estoque: 30, codigo: "8364" },
  { id: 5, nome: "melancia", preco: 3.00, marca: "EEEE", estoque: 20, codigo: "2984" },
  { id: 6, nome: "laranja", preco: 5.00, marca: "FFFF", estoque: 25, codigo: "9375" },
  { id: 7, nome: "abacate", preco: 4.00, marca: "LLLL", estoque: 35, codigo: "1038" },
  { id: 8, nome: "uva", preco: 7.00, marca: "TTTTT", estoque: 45, codigo: "9574" },
  { id: 9, nome: "maracuja", preco: 3.00, marca: "GGGGG", estoque: 50, codigo: "8793" },
  { id: 10, nome: "mamao", preco: 8.00, marca: "", estoque: 30, codigo: "8365" }
];

fs.writeFileSync("produtos.json", JSON.stringify(produtos));


console.log("JSON de mercado criado");