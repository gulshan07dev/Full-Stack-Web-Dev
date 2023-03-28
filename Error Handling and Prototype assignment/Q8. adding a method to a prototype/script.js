// Define the Student prototype object
function Student(name) {
    this.name = name;
}

// Add the printDetails method to the prototype object
Student.prototype.printDetails = function () {
    console.log(`Hello, my name is ${this.name}`);
}

// Instantiate a Student object with the name "Mithun"
const student = new Student("Mithun");

// Call the printDetails method on the student object
student.printDetails(); // Output: Hello, my name is Mithun