const fs = require('fs');

fs.writeFile('nodejs_architecture.txt', "Adding text using nodejs", function(err) {
    if(err) {
        console.log("error in write file");
    }
    else {
        console.log("succesfully write file");
    }
})