import { CalculadoraParams } from './calculadora-params.js';

export class Calculadora {

  private n1: number;
  private n2: number;

  constructor(
    n1: number,
    n2: number,
  ) {
    this.n1 = n1;
    this.n2 = n2;
  }

  public subtrair(): number {
    return this.n1 - this.n2;
  }

  public multiplicar(params: CalculadoraParams): number {
    return params.n1 * params.n2;
  }

  public dividir(params: CalculadoraParams): number {
    return params.n1 / params.n2;
  }

}
