// Load required packages
var mongoose = require('mongoose');

// Define our Comics Schema
var EpisodeSchema = new mongoose.Schema({
    seriesId: { type: Number, required: true },
    seasonId: { type: Number, required: true },
    episodeId:{type:Number,required:true,unique: true},
    episodeName: { type: String, required: true,unique: true },
    episodeImagePath: { type: String, required: true },
    createdDate: { type: Date, default: Date.now },
    updatedDate: { type: Date, default: Date.now }
});

// Export the Mongoose model
module.exports = mongoose.model('episodes', EpisodeSchema);