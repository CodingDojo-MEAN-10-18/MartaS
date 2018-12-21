const mongoose = require('mongoose');
const { Schema } = mongoose;

const BikeSchema = new Schema({
  title: {
    type: String,
    required: [true, 'Title name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [200, 'Description must be less than 200 characters']
  },
  price: {
    type: Number,
    required: [true, 'Must include a price'],
    min: [1, 'Price must be more than $1']
  },
  location: {
    type: String,
    required: [true, 'Must include a location']
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Bike', BikeSchema);
