class Employee {

    constructor(id, name, address) {
        this._id = id;
        this.name = name;
        this.address = address;
    }

    get id() {
        return this._id;
    }

    set name(value) {
        this._name = value; 
    }

    get name() {
        return this._name;
    }

    set address(value) {
        this._address = value;
    }

    get address() {
        return this._address;
    }

    set paymentClassification(value) {
        this._paymentClassification = value;
    }

    get paymentClassification() {
        return this._paymentClassification;
    }
}

module.exports = Employee;