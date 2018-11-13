const mongoose = require('mongoose') 

const { Schema } = mongoose;

const UserSchema = new Schema({
    name: String,
    quote: String,
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('User', UserSchema)