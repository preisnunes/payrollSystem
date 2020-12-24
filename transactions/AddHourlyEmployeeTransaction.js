class AddHourlyEmployeeTransaction extends AddEmployeeTransaction{
    async do(employee) {
        console.log({
            id: employee.id,
            name: employee.name,
            address: employee.address,
            payment: {
                type: 'hourly',
                rate: employee.paymentClassification.rate
            } 
        });
    }
}

module.exports = AddHourlyEmployeeTransaction;