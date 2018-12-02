const mongoose = require('mongoose');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Author name is required'],
    minlength: [3, 'Author name must be longer than 3 characters'],
    trim: true
  },
}, {
  timestamps: true
});

module.exports = mongoose.model('Author', AuthorSchema);
