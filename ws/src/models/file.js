const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const file = new Schema({
    referenceId: {
        type: Schema.Types.ObjectId,
        refPath: 'model',
        required: true
    },
    model: {
        type: String,
        required: true,
        enum: ['Service', 'Salon']
    },
    path: {
        type: String,
        required: true
    },
    registerDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('File', file);