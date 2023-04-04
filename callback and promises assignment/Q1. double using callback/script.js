function multiplyByTwo(el) {
    return el * 2;
}

function doubleEl(arr, multiplyByTwo) {
    let double = arr.map(element => {
        return multiplyByTwo(element);
    });
    return double;
}

let arr = [1, 2, 3, 4];
console.log(doubleEl(arr, multiplyByTwo)); 