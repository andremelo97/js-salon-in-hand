const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salonWorker = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon',
        required: true
    },
    workerId: {
        type: mongoose.Types.ObjectId,
        ref: 'Worker',
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

module.exports = mongoose.model('SalonWorker', salonWorker);