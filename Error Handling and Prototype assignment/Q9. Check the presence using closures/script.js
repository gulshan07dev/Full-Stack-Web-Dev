function numberChecker(numbers) {
    return function (num) {
        return numbers.includes(num);
    }
}

const myNumbers = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(myNumbers);

console.log(checkNumber(3)); // true
console.log(checkNumber(6)); // false