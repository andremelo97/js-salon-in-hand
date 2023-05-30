const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salonCustomer = new Schema({
    salonId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon',
        required: true
    },
    customerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Customer',
        required: true
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

module.exports = mongoose.model('SalonCustomer', salonCustomer);