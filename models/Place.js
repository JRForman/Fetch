var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  id: String,
  place: String,
  website: String
  
});

module.exports = mongoose.model('Place', PlaceSchema);
