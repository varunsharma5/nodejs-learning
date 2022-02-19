var url = 'http://mylogger.io/log';
const EventEmitter = require('events');
const emitter = new EventEmitter();

class Logger extends EventEmitter {
  log(message) {
    // Send an HTTP request
    console.log(message)
    
    //Raise an event
    emitter.emit('messageLogged', { id: 1, url: 'https://...'});
  }
}



// module.exports.log = log;
// module.exports = log
module.exports = Logger;
// module.exports.endPoint = url;
