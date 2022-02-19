const { DataTypes } = require("sequelize/types");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {

  const Product = sequelize.define("product",{
    title: {},
    price: {},
    description: {},
    published: {}
  });

  return Product;
}