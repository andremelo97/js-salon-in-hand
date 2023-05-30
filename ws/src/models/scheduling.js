const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduling = new Schema({
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
    workerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Worker',
        required: true
    },
    serviceId: {
        type: mongoose.Types.ObjectId,
        ref: 'Service',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    fee: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Scheduling', scheduling);