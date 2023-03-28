function getPerson(person) {
    try {
        if (!person || typeof person !== 'object' || !person.name || !person.age) {
            throw new Error("Invalid parameter type");
        }
        return `Name: ${person.name}, Age: ${person.age}`;
    } catch (err) {
        return err.message;
    }
}

console.log(getPerson( {name: "Mithun", age: 25})); // Output: "Name: Mithun, Age: 25"
console.log(getPerson( {name: "Mithun"})); // output: "Invalid parameter type"