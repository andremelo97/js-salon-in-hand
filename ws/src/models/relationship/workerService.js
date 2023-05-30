const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const workerService = new Schema({
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

module.exports = mongoose.model('WonkerService', workerService);