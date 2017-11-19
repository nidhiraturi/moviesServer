// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the  category Schema
var categorySchema = new Schema({

   
    category_id:{type:Number,unique: true},
    category_name:{type:String,unique: true}
  


});

// we need to create a model for using schema
var Category = mongoose.model('categorys', categorySchema);

// make this available to our customers in our Node applications
module.exports = Category;
