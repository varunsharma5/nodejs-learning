const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello My World - Varun Sharma \n')
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

// Get the PORT value from env var
const port = process.env.PORT || 3000;
console.log(`port value: #{port}`);
app.listen(port, () => { console.log(`Listening on port ${port} ...`); } );