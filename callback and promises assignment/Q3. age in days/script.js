function ageInDays(person, logResult) {
    // Concatenate first and last name into a single string
    let fullName = `${person.firstName} ${person.lastName}`;

    // Calculate age in days
    let ageInDays = person.age * 365;

    // Return the callback function
    return function () {
        logResult(fullName, ageInDays);
    };
}

// Define the callback function
function logResult(fullName, ageInDays) {
    console.log(`The person's full name is ${fullName} and their age in days is ${ageInDays}.`);
}

let person = {
    firstName: "Gulshan",
    lastName: "Kumar",
    age: 14
};

let logAgeInDaysCallback = ageInDays(person, logResult);
logAgeInDaysCallback(); // Output: The person's full name is Gulshan Kumar and their age in days is 10950.  