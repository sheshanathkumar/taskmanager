const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const status = new Schema ( {
    taskid:{
        type: Number,
        require: true,
    },
    status: [
        {
            id:{
                type:Number,
                require: true
            },
            title:{
                type:String
            },
            time:{
                type:Date
            }
        }
    ]
})

module.exports = mongoose.model('status', status);