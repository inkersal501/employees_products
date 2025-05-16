const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
    name: String, 
    price: String, 
});
const Products = mongoose.model("Products", productsSchema, 'products');
module.exports = Products;