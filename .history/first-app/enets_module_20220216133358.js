const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.emit('message logged')