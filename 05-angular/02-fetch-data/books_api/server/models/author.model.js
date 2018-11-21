const mongoose = require('mongoose');
//const uniqueValidator = require('mongoose-unique-validator');
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  fname: {
    type: String,
    required: [true, "Author first name is required"],
    minlength: [2, "Author first name must be longer than 2 characters"],
    trim: true
  },
  lname: {
    type: String,
    required: [true, "Author last name is required"],
    minlength: [2, "Author last name must be longer than 2 characters"],
    trim: true
  },
  country: {
    type: String,
    required: [true, "Author country of origin is required"],
    minlength: [3, "Country of origin must be longer than 3 characters"],
    trim: true
  },
  // birthdate: {
  //  type: Date
  // },

  birthdate: {
    day: {
      type: Number,
      required: [true, "must enter day"], min: 1, max: 31
    },
    month: {
      type: Number,
      required: [true, 'must enter month'], min: 1, max: 12
    },
    year: {
      type: Number,
      required: [true, 'must enter year'], max: 2018
    }
  },

  books: [{
    title: {
      type: String,
      minlength: [2, "Book title must be at least 2 characters"]
    },
    publication_year: {
      type: Number,
      max: 2018
    }
  }]

});

//taskSchema.plugin(uniqueValidator, { message: '{PATH} must be unique.' })

module.exports = mongoose.model('Author', AuthorSchema);
