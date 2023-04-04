function logString(manipulatedStr) {
    console.log(`The manipulated string is: ${manipulatedStr}`);
}

function manipulateString(str, logString) {
    // Convert the string to uppercase
    let manipulatedStr = str.toUpperCase();

    // Return the callback function
    return function () {
        logString(manipulatedStr);
    };
}

let str = "Hello, world!";
let logStringCallback = manipulateString(str, logString);
logStringCallback(); // Output: The manipulated string is: HELLO, WORLD!