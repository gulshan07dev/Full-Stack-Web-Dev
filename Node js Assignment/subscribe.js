const events = require('events');

// Create an event emitter
const eventEmitter = new events.EventEmitter();

// Create a custom event named "subscribe"
const eventName = 'subscribe';

// Subscribe event handler
const subscribeEventHandler = (data) => {
    console.log('User has subscribed!', data);
};

// Register the event handler
eventEmitter.on(eventName, subscribeEventHandler);

// Simulate triggering the "subscribe" event with additional data
eventEmitter.emit(eventName, "college wallah"); 