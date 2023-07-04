const mongoose = require('mongoose');
const { default: isEmail } = require('validator/lib/isEmail');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate: [isEmail, 'invalid email']
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
    website: {
        type: String
    },
    address: {
        type: String,
        required: [true, 'address is required']
    },
    phone: {
        type: String,
        required: [true, 'phone number is required']
    },
    role: {
        type: String,
        required: [true, 'role is required'],
        enum: ['admin', 'organisation', 'donar', 'hospital']
    },
    name: {
        type: String,
        required: function () {
            if (this.role === 'user' || this.role === 'admin') {
                return true
            }
            return false
        }
    },
    organisationName: {
        type: String,
        required: function () {
            if (this.role === 'organisation') {
                return true
            }
            return false
        }
    },
    hospitalName: {
        type: String,
        required: function () {
            if (this.role === 'hospital') {
                return true
            }
            return false
        }
    },

}, { timestamps: true });

module.exports = mongoose.model('users', userSchema);