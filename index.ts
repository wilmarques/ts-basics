// import { soma } from './soma.js';
import { Calculadora } from './calculadora.js';

const soma = (n1: unknown, n2: unknown): number => {
  if (typeof n1 === 'number' && typeof n2 === 'number') {
    return n1 + n2;
  }
};

const resultadoSoma: number = soma('teste', 3);
// console.log(`Resultado da soma é: ${resultadoSoma}`);

const calculadora = new Calculadora(5, 2);
const resultadoCalculadora = calculadora.subtrair();
console.log(`Resultado da calculadora é: ${resultadoCalculadora}`);

console.log(`n1 é ${calculadora['n1']}`);
