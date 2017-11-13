// Load required packages
var mongoose = require('mongoose');

// Define our Season schema
var SeasonSchema = new mongoose.Schema({
    seriesId: { type: Number, required: true },
    seasonId:{type:Number,required:true},
    seasonName: { type: String, required: true },
    seasonImagePath:{type: String },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('Season', SeasonSchema);