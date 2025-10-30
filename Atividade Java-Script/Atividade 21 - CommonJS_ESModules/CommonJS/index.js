process.env.NODE_ENV = "development";

const operacao = require("./mathOperation");

console.log(operacao.add(5, 5));
console.log(operacao.subtract(10, 5));
console.log(operacao.multiply(5, 5));
