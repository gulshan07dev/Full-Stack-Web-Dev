const events = require('events');

// Create an event emitter
const eventEmitter = new events.EventEmitter();

// Get the current maximum number of event listeners
const currentMaxListeners = eventEmitter.getMaxListeners();
console.log('Current maximum number of event listeners:', currentMaxListeners);

// Set the maximum number of event listeners to 51
eventEmitter.setMaxListeners(51);

// Verify the updated maximum number of event listeners
const updatedMaxListeners = eventEmitter.getMaxListeners();
console.log('Updated maximum number of event listeners:', updatedMaxListeners); 