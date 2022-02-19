const express = require('express');

const app = express();
const courses = [
  { id: 1, name: 'course1' },
  { id: 2, name: 'course2' },
  { id: 3, name: 'course3' },
];
app.get('/', (req, res) => {
  res.send('Hello My World - Varun Sharma \n')
});

app.get('/api/courses', (req, res) => {
  res.send(courses);
});

// Route/Path params & // Query params
// /api/courses/1
app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if(!course) { // 404
    res.status(404).send('The course with given id was not found !\n');
  }
  res.send(course);
});

app.get('/api/posts/:year/:month', (req, res) => {
  // res.send(req.params);
  res.send(req.query);
});

// Get the PORT value from env var
const port = process.env.PORT || 3000;
// console.log(`env PORT value ${process.env.PORT}`);
// console.log(`port valu e: ${port}`);
app.listen(port, () => { console.log(`Listening on port ${port} ...`); } );