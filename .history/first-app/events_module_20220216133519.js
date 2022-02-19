const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged')

emitter.emit('messageLogged');