const http = require('http');

const server = http.createServer((req,res) => {
  
});

// server.on('connection', (socket) => {
//   console.log('new connection ...')
// });


server.listen(3000);

console.log('Listening on port 3000...');