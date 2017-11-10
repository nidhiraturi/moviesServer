// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var productSchema = new Schema({

    ProductId: { type: String},
    productName: { type: String},
    productPrice: { type: Number },
    productImagePath:{type:String},
    productQuantity : {type : Number},
    category_id:{type:String}
});
//
// we need to create a model for using schema
var Product = mongoose.model('product', productSchema);

// make this available to our employee in our Node applications
module.exports = Product;
