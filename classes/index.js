var Payment = /** @class */ (function () {
    function Payment(n, a, p) {
        // logo, tudo isso é permitido
        this._name = n;
        this._age = a;
        this._paybill = p;
        // mas isso não:
        // this._test = 30;
    }
    Payment.prototype.owes = function () {
        return this._name + ", " + this._age + " years old, owes the amount of " + this._paybill + " dollars.";
    };
    return Payment;
}());
var firstObj = new Payment('Juninho', 12, 500000);
var secondObj = new Payment('Zezinho', 40, 1);
console.log(firstObj.owes());
console.log(secondObj.owes());
// Existe também, uma forma de explicitarmos que um array apenas pode receber elementos de uma certa classe:
var arr = [];
// arr.push(15); --- X
// arr.push('qualquercoisa') --- X
arr.push(firstObj);
arr.push(secondObj);
console.log(arr);
