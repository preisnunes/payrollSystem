const Payment = require('./PaymentClassifiction');

class ComissionedClassification extends Payment {

    constructor(salary, comission) {
        this.salary = salary;
        this.comission = comission;
    }

    set salary(value) {
        this._salary = value;
    }

    get salary() {
        return this._salary;
    }

    set comission(value) {
        this._comission = value;
    }

    get comission() {
        return this._comission;
    }
}


module.exports = ComissionedClassification;