var mongoose = require('mongoose');

var PlaceSchema = new mongoose.Schema({
  id: String,
  place: String,
  website: String
  
});

 const Place = mongoose.model('Place', PlaceSchema);

 module.exports = Place