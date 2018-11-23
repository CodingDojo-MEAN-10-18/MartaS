const mongoose = require('mongoose');

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        default: ''
    },
  completed: {
    type: Boolean,
    default: false
  }

});

module.exports = mongoose.model('Task', TaskSchema);
