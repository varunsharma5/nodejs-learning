const express = require('express');
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: 'https://localhost:8001'
};

const router = require('./routes/productRoutes.js');

app.use('/api/products', router);

// Middlewares
app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

//Testing API
app.get('/test', (req, res) => {
  res.json({ message: 'Hello from API server' });
});

//Port

const PORT = process.env.PORT || 8080;

//Server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});