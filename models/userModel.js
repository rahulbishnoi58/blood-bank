const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:[true,'email is required'],
        unique:true,
        validate: [ isEmail, 'invalid email' ]
    },
    password:{
     type:String,
     required:[true,'password is required'],
    },
    website:{
        type:String
    },
    address:{
       type:String,
       required:[true,'address is required']
    },
    phone:{
        type:String,
        required:[true,'phone number is required']
    }
})