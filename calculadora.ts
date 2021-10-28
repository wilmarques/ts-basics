import { CalculadoraParams } from './calculadora-params.js';

export class Calculadora {

  constructor(
    private n1: number,
    private n2: number,
  ) { }

  subtrair(): number {
    return this.n1 - this.n2;
  }

  multiplicar(params: CalculadoraParams): number {
    return params.n1 * params.n2;
  }

  divir(params: CalculadoraParams): number {
    return params.n1 / params.n2;
  }

}
