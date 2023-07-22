const events = require('events');

// Create an event emitter
const eventEmitter = new events.EventEmitter();

// Create a custom event named "myEvent"
const eventName = 'myEvent';

// Event handler
const myEventHandler = () => {
    console.log('Event handler called!');
};

// Register the event handler
eventEmitter.on(eventName, myEventHandler);

// Emit the event
eventEmitter.emit(eventName); // Output: "Event handler called!"

// Remove the event handler
eventEmitter.removeListener(eventName, myEventHandler);

// Emit the event again
eventEmitter.emit(eventName); // No output
