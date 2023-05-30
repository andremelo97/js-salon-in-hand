const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const worker = new Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory.']
    },
    lastName: {
        type: String,
        required: [true, 'Name is mandatory.']
    },
    phone: String,
    picture: String,
    email: {
        type: String,
        required: [true, 'E-mail is mandatory.']
    },
    password: {
        type: String,
        default: null
    },
    birthDate: {
        type: String,
        required: [true, 'Birth date is mandatory.']
    },
    gender: {
        type: String,
        enum: ['Male', 'Female'],
        required: [true, 'Gender is mandatory.']
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive'],
        default: 'Active'
    },
    bankAccount: {
        owner: {
            type: String,
            required: [true, 'Owner is mandatory.']
        },
        identity: {
            type: String,
            required: [true, 'Identity is mandatory.']
        },
        bank: {
            type: String,
            required: [true, 'Bank is mandatory.']
        },
        type: {
            type: String,
            enum: ['PF', 'PJ'],
            required: [true, 'Type is mandatory.']
        },
        agency: {
            type: String,
            required: [true, 'Agency is mandatory.']
        },
        number: {
            type: String,
            required: [true, 'Number is mandatory.']
        },
        v_number: {
            type: String,
            required: [true, 'Verifying Number is mandatory.']
        }
    },
    recipientId: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Worker', worker);