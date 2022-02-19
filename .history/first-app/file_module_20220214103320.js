const fs = require('fs');

const files = fs.readdirSync('./');

// console.log(files);

//Async
fs.readdir('./sadasd', function(err, files){
  if(err) console.log('Error', err)
  else console.log('Result', files)
});