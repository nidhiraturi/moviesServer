// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var customerSchema = new Schema({

    
    name: { type: String, unique: true },
    email: { type: String },
    mobileNumber: { type: Number},
    userName:{type:String},
    password:{type:String},
   typeUser:{type:Number},
   code:{type:String},
   verified:{type:Boolean}
    
 
});

// we need to create a model for using schema
var Customer = mongoose.model('tempcustomers', customerSchema);

// make this available to our employee in our Node applications
module.exports = Customer;
