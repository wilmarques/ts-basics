export class Calculadora {
    constructor(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    subtrair() {
        return this.n1 - this.n2;
    }
    multiplicar(params) {
        return params.n1 * params.n2;
    }
    divir(params) {
        return params.n1 / params.n2;
    }
}
