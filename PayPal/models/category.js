const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    }
}, { timestapms: true });

module.exports = mongoose.model('category', categorySchema);