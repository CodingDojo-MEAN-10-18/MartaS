const mongoose = require('mongoose')

const { Schema } = mongoose;


const OwlSchema = new Schema({
    name: String,
    color: String,
    wingspan: Number
})

module.exports = mongoose.model('Owl', OwlSchema)