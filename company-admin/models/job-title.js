const mongoose = require('mongoose');

const jobTitleSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    code: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('job_title', jobTitleSchema);