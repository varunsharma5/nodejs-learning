const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'https://localhost:8001'
};

// Middleware
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));