const Payment = require('./PaymentClassifiction');

class HourlyClassification extends Payment {

    constructor(rate) {
        this.rate = rate;
    }

    set rate(value) {
        this._rate = value;
    }

    get rate() {
        return this._rate;
    }
}

module.exports = HourlyClassification;