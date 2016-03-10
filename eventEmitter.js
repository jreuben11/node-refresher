// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var aHandler = function AHandler() {
   console.log('received A');
   // Fire the data_received event
   eventEmitter.emit('B');
}

// Bind the connection event with the handler
eventEmitter.on('A', aHandler);

// Bind the B event with the anonymous function
eventEmitter.on('B', () => {
   console.log('B received succesfully.');
});

// Fire the connection event
eventEmitter.emit('A');

console.log("Program Ended.");
