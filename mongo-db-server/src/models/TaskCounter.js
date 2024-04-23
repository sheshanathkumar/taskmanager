const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskCounter = new Schema( {
    counter:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('taskcounter', TaskCounter);