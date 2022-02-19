const os = require('os');

var totalMemory = os.totalmem;
var freeMemory = os.freemem

console.log('Free Memory: ' + freeMemory);
console.log(totalMemory);

//Template String
console.log(`Total Memory: ${totalMemory}`);