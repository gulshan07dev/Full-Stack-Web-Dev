
const fs = require('fs');

fs.readFile('nodejs_arhitecture.txt', function(err, data) {
    if(err) {
        console.log(`error in read file: ${err}`);
    }
    else {
        console.log(`Your Data is: ${data.toString()}`);
    }
})



fs.appendFile('nodejs_architecture.txt', 'Hey How Are You', function(err, data) {
    if(err) {
        console.log("error in appending file");
    }
    else {
        console.log(`succesfully append file: ${data.toString()}`);
    }
})



fs.unlink('nodejs_architecture.txt', function(err) {
    if(err) {
        console.log("error in deleting file");
    }
    else {
        console.log("succesfully deleted file");
    }
})