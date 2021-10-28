import { soma } from './soma.js';
import { Calculadora } from './calculadora.js';
const resultado = soma(1, 2);
console.log(`O resultado da soma é: ${resultado}`);
const calculadora = new Calculadora(3, 4);
const resultadoSubtracao = calculadora.subtrair();
// calculadora.n1 = 8;
// calculadora['n1'] = 8;
console.log(`O resultado da subtração é: ${resultadoSubtracao}`);
