const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customer = new Schema({
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
    identity: {
        type: {
            type: String,
            enum: ['individual', 'corporation'],
            required: [true, 'Identity Type is mandatory.']
        },
        number: {
            type: String,
            require: [true, 'Identity Number is mandatory.']
        }
    },
    address: {
        country: {
            type: String,
            require: [true, 'Contry is mandatory.']
        },
        state: {
            type: String,
            require: [true, 'State is mandatory.']
        },
        city: {
            type: String,
            require: [true, 'City is mandatory.']
        },
        street: {
            type: String,
            require: [true, 'Street is mandatory.']
        },
        zip_code: {
            type: String,
            require: [true, 'Zip Code is mandatory.']
        },
        number: {
            type: String,
            require: [true, 'Number is mandatory.']
        },
        complement: {
            type: String,
            require: [true, 'Complement is mandatory.']
        },
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
    registerDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Customer', customer);