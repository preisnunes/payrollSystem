




class AddEmployeeTransaction {

    class(service) {
        this.service = service;
    }
}


class AddSalariedmployeeTransaction extends AddEmployeeTransaction{
    async do () {
        console.log({
            id: employee.id,
            name: employee.name,
            address: employee.address,
            payment: {
                type: 'salaried',
                salary: employee.paymentClassification.salary
            } 
        });
    }
}

class AddComissionedEmployeeTransaction extends AddEmployeeTransaction{
    async do () {
        console.log({
            id: employee.id,
            name: employee.name,
            address: employee.address,
            payment: {
                type: 'comissioned',
                salary: employee.paymentClassification.salary,
                comission: employee.paymentClassification.comission
            } 
        });
    }
}