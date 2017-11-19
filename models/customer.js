// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var customerVerifiedSchema = new Schema({

    
    name: { type: String, unique: true },
    email: { type: String,unique: true },
    mobileNumber: { type: Number,unique: true},
    userName:{type:String,unique: true},
    password:{type:String},
    typeUser:{type:Number},
    verified:{type:Boolean}
    
 
});

// we need to create a model for using schema
var CustomerVerified = mongoose.model('customer', customerVerifiedSchema);

// make this available to our employee in our Node applications
module.exports = CustomerVerified;
