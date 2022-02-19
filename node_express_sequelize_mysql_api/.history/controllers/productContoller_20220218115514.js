const db = require('../models');

//create main model
const Product = db.products;
const review = db.reviews;

// main logic

// 1. create product

const addProduct = async (req, res) => {

  let info = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  }

  const product = await Product.create(info);
  res.status(200).send(product);
  console.log(product);
};

//2. Get all products

const getAllProducts = async (req, res) => {
  let products = await Product.findAll({
    attributes: [
      'title',
      'price'
    ]
  });
  res.status(200).send(products);
}

//2. Get single product

const getAllProducts = async (req, res) => {
  let reqId = req.params.id;
  let getOneProduct = await Product.findOne({ where: { id: reqId }  });
  res.status(200).send(getOneProduct);
}