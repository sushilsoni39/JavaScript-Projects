var CalculatorModel = function (id, options) {
    this.options = {
        numericButtons: [7, 8, 9, 4, 5, 6, 1, 2, 3, 0],
        operatorButtons: ['/', '*', '+', '-'],
        equC: ["C", "="]

    }
    this.id = id;
    return this;
};