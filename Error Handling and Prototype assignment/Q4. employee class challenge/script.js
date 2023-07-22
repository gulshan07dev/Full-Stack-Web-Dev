class Employee {
    constructor(n, p, s) {
        this.name = n;
        this.position = p;
        this.salary = s;
    }
    getSalary() {
        return this.salary;
    }
}

const employee = new Employee("name", "first", 5);
console.log(employee.getSalary());