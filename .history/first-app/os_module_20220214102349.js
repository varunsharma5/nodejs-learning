const os = require('os');

var totalMemory = os.totalmem;
var freeMemory = os.freemem

console.log(''+totalMemory)

console.log('Free Memory: ' + freeMemory);

//Template String
console.log(`Total Memory: ${totalMemory}`);