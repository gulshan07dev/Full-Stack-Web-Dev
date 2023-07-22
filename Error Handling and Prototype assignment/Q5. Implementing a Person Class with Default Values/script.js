class person {
    constructor(n = "Unknown", a = 0) {
        this.name = n;
        this.age = a;
    }
    getDetails() {
        return `Name: ${this.name}, Age: ${this.age}`;
    }
}

const person1 = new person("mithun", 25);
console.log(person1.getDetails());

const person2 = new person();
console.log(person2.getDetails());