const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(){
  
});

emitter.emit('messageLogged');