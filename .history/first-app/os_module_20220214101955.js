const os = require('os');
var totalMemory = os.totalmem;
var freeMemory = os.freemem
console.log(freeMemory);
console.log(totalMemory);