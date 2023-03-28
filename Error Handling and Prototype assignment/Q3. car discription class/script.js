class Car {
    constructor(company, model, year) {
        this.company = company;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `This is a ${this.year} ${this.company} ${this.model}`;
    }
}

// Instantiate a Car object
const myCar = new Car("Toyota", "Corolla", 2022);

// Call the getDescription method on the Car object
console.log(myCar.getDescription()); // Output: This is a 2022 Toyota Corolla