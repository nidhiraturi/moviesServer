// Load required packages
var mongoose = require('mongoose');

// Define our Series schema
var SeriesSchema = new mongoose.Schema({
    category_id:{type:Number},
    seriesId:{type:Number},
    seriesName: { type: String, required: true },
    seriesImagePath:{type:String},
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
  

});

// Export the Mongoose model
module.exports = mongoose.model('Series', SeriesSchema);