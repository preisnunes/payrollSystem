const Payment = require('./PaymentClassification');

class MonthlyClassification extends Payment {

    constructor(salary) {
        self.salary = salary; 
    }

    set salary(value) {
        this._salary = value;
    }

    get salary() {
        return this._salary;
    }
}

module.exports = MonthlyClassification;

