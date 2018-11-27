const mongoose = require('mongoose');
const { Schema } = mongoose;

const WeatherSchema = new Schema({
  humidity: Number,
  tempAve: Number,
  tempHigh: Number,
  tempLow: Number,
  status: String
});

module.exports = mongoose.model('Weather', WeatherSchema);
