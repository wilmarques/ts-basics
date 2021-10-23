var Calculadora = /** @class */ (function () {
    function Calculadora(n1, n2) {
        this.n1 = n1;
        this.n2 = n2;
    }
    Calculadora.prototype.subtrair = function () {
        return this.n1 - this.n2;
    };
    Calculadora.prototype.multiplicar = function (params) {
        return params.n1 * params.n2;
    };
    Calculadora.prototype.dividir = function (params) {
        return params.n1 / params.n2;
    };
    return Calculadora;
}());
export { Calculadora };
