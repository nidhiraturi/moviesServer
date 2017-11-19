// Import required modules.
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// create the Schema
var movieSchema = new Schema({

   
    category_id:{type:Number},
    movieId:{type:Number,unique: true},
    movieName:{type:String,unique: true},
    movieImagePath:{type:String}



});

// we need to create a model for using schema
var Movies = mongoose.model('movie', movieSchema);

// make this available to our customers in our Node applications
module.exports = Movies;
