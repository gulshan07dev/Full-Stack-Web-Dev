function convertToNumber(str) {
    const num = parseInt(str);
    if (isNaN(num)) {
        return "Invalid number";
    }
    return num;
}

console.log(convertToNumber("42")); // Output: 42
console.log(convertToNumber("3.14")); // Output: 3
console.log(convertToNumber("foo")); // Output: "Invalid number"