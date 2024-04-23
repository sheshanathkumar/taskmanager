const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const category = new Schema( {
    cat_id: {
        type:Number,
        require: true
    },
    cat_descr:{
        type:String,
        require: true
    }
} )

 
module.exports = mongoose.model('categories', category);