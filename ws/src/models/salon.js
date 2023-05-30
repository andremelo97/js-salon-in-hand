const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salon = new Schema({
    name: {
        type: String,
        required: [true, 'Name is mandatory.']
    },
    picture: String,
    cover: String,
    email: {
        type: String,
        required: [true, 'E-mail is mandatory.']
    },
    password: {
        type: String,
        default: null
    },
    phone: String,
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
    geo: {
        type: String,
        coordinates: Array
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});

salon.index({ geo: '2dsphere' })

module.exports = mongoose.model('Salon', salon);