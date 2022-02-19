const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello My World - Varun Sharma \n')
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

// Get the PORT value from env var

app.listen(3000, () => { console.log('Listening on port 3000 ...'); } );