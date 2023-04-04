function greetWithName(name) {
    return new Promise((resolve, reject) => {
        if (typeof name !== 'string') {
            reject('Name should be a string');
        } else {
            resolve(`Hello, ${name}!`);
        }
    });
}


greetWithName('Mithun')
    .then((message) => {
        console.log(message); // prints "Hello, Mithun!"
    })
    .catch((error) => {
        console.error(error);
    });