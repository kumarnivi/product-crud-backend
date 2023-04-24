var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    image: {
        type: String,
        required: true,
        unique: true
    },
    Name: {
        type: String,
        default: ''
    },
    Discription: {
        type: String,
        default: ''
    },
    price:{ 
        type:Number
    },
    Discount:{
        type: String,
        default: ''
    }

    
});

var user = new mongoose.model('User', schema);

module.exports = user;