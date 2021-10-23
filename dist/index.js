// import { soma } from './soma.js';
import { Calculadora } from './calculadora.js';
// const soma = (n1: number, n2: number): number => {
//   return n1 + n2;
// };
// const resultadoSoma: number = soma(2, 3);
// console.log(`Resultado da soma é: ${resultadoSoma}`);
var calculadora = new Calculadora(5, 2);
var resultadoCalculadora = calculadora.subtrair();
console.log("Resultado da calculadora \u00E9: " + resultadoCalculadora);
console.log("n1 \u00E9 " + calculadora['n1']);
