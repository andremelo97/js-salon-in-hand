const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schedule = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon',
        required: true
    },
    services: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Service',
            required: true
        }
    ],
    workers: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Worker',
            required: true
        }
    ],
    days: {
        type: [Number],
        required: true
    },
    start: {
        type: [Number],
        required: true
    },
    end: {
        type: [Number],
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});

salon.index({ geo: '2dsphere' })

module.exports = mongoose.model('Schedule', schedule);