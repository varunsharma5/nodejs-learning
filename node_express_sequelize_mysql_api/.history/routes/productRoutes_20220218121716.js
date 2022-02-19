const productController = require('../controllers/productContoller.js');

const router = require('express').Router();

router.post('/addProduct', productController.addProduct);
router.get('/allProducts', productController.getAllProducts);
router.get('/published', productController.getPublishedProducts);
router.get('/:id', productController.getOneProduct);