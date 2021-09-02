const mongoose = require('mongoose');
const Schema = mongoose.Schema;

module.exports = new Schema({
    title: {
        type: String,
        required: true
    },
    mentor: {
        type: Schema.Types.ObjectId,
        ref: 'user'
    },
    mentees: [{
        type: Schema.Types.ObjectId,
        ref: 'user'
    }],
    notes: {
        type: Array,
        default: [],
    }
});
