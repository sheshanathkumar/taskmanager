const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const users = new Schema( {
    e_id:{
        type:Number,
        require:true
    },
    e_name:{
        type:String,
    },
    m_id:{
        type:Number,
    },
    created_at:{
        type:Date
    }
})

module.exports = mongoose.model('users', users);