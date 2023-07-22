const os = require('os');

// Get the OS name
const osName = os.platform();

// Get the OS release version
const osRelease = os.release();

// Print the OS name and release version
console.log('OS Name:', osName);
console.log('OS Release Version:', osRelease); 