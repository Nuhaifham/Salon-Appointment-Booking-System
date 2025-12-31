const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  clientName: { type: String, required: true },
  service: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  status: { type: String, default: 'Pending' }
});

module.exports = mongoose.model('Appointment', AppointmentSchema);