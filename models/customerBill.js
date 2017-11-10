// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var customerBillSchema = new Schema({

    
    name:{type: String},
    total1:{type:Number}
   
    
 
});

// we need to create a model for using schema
var customerBill = mongoose.model('customerBill', customerBillSchema);

// make this available to our employee in our Node applications
module.exports = customerBill;
