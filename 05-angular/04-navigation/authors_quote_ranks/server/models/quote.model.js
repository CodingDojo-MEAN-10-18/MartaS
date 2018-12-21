const mongoose = require('mongoose');
const { Schema } = mongoose;

const QuoteSchema = new Schema({
  quote: {
    type: String,
    required: [true, 'Quote is required'],
    minlength: [3, 'Quote must be longer than 3 characters'],
    trim: true
  },
  votes: {
    type: Number,
    trim: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Quote', QuoteSchema);
