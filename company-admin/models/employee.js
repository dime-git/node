const mongoose = require('mongoose');

const employeeSchema = mongoose.Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  salary: {
    type: Number,
  }
});

module.exports = mongoose.model('employee', employeeSchema);
