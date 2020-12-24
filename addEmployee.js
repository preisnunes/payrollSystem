const Employee = require('./entities/Employee');
const HourlyClassification = require('./entities/HourlyClassification');
const SalariedClassification = require('./entities/SalariedClassification');
const ComissionedClassification = require('./entities/ComissionedClassification');

const name = 'Pedro';
const employeeId = 2;
const address = 'Avenue';

const service;

const employee = new Employee(employeeId, name, address);
let transaction;

switch(type) {
    case 'H':
        const rate = 20;
        employee.paymentClassification = new HourlyClassification(rate);
        transaction = new AddHourlyEmployeeTransaction(service);
    case 'S':
        const salary = 1000;
        employee.paymentClassification = new SalariedClassification(salary);
        transaction = new AddSalariedmployeeTransaction(service);
    case 'C':
        const salary = 1000;
        const comission = 10;
        employee.paymentClassification = new ComissionedClassification(salary, comission);
        transaction = new AddComissionedEmployeeTransaction(service);
}

await transaction.do(employee);