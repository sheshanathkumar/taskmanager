const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tasks = new Schema({
    id: {
        type: Number,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    subject: {
        type: String,
    },
    author: {
        type: String,
    },
    time: {
        type: Date,
    },
    category: {
        type: String,
    },
    priority: {
        type: String,
    }
})

module.exports = mongoose.model('tasks', tasks);