const EventEmitter = require('events');
const emitter = new EventEmitter();

emitter.on('messageLogged', function(arg){
  console.log('Listner called:', arg);
});

emitter.emit('messageLogged', { id: 1, url: 'https://...'});
