const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StatusCounter = new Schema( {
    counter:{
        type:Number,
        require:true
    }
})

module.exports = mongoose.model('statusCounter', StatusCounter);