const mongoose = require('mongoose')

const schema = mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String
    },
    password:{
        type:String
    }

})

module.exports = mongoose.model('signUpModel', schema)