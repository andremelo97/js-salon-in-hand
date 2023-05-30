const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const service = new Schema({
    salaoId: {
        type: mongoose.Types.ObjectId,
        ref: 'Salon'
    },
    title: {
        type: String,
        required: [true, 'Title is mandatory.']
    },
    price: {
        type: Number,
        required: [true, 'Price is mandatory.']
    },
    duration: {
        type: Number,
        required: [true, 'Duration is mandatory.']
    },
    fee: {
        type: Number,
        required: [true, 'Fee is mandatory.']
    },
    recurrence: {
        type: Number,
        required: [true, 'Recurrence is mandatory.']
    },
    description: {
        type: String,
        required: [true, 'Description is mandatory.']
    },
    status: {
        type: String,
        enum: ['Active', 'Inactive', 'Excluded'],
        default: 'Active'
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Service', service);