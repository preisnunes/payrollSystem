const Employee = require('../src/Employee');


describe('Test Employee Entity', () => {

    it('Giben name by constructor, then name is set', () => {
        const name = 'Pedro';
        const employee = new Employee(name);
        expect(employee.name).toEqual(name);
    });

    it('Given name by name setter, then name is set', () => {
        const employee = new Employee('Pedro');
        employee.name = 'Andre';
        expect(employee.name).toEqual('Andre');
    });

    it('Setting name, then an id should be created', () => {
        const employee = new Employee('pedro');
        expect(employee.id).toBeDefined();
    });

    it('Setting address, then an address should be created', () => {
        const address = 'Avenue';
        const employee = new Employee('pedro');
        employee.address = address;
        expect(employee.address).toEqual(address);
    });

    

}); 