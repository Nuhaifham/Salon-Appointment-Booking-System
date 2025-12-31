const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
// 'mongo' is the service name defined in your docker-compose.yml
mongoose.connect('mongodb://mongo:27017/styledSalon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// --- SCHEMA DEFINITION ---
const appointmentSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  service: String,
  date: Date,
  time: String, 
  status: { type: String, default: 'Pending' }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// --- ROUTES ---

// 1. GET all appointments (Sorted by Date & Time)
app.get('/api/appointments', async (req, res) => {
  try {
    // MODIFICATION HERE:
    // .sort({ date: 1, time: 1 }) -> 1 means Ascending (Oldest/Earliest first)
    const appointments = await Appointment.find().sort({ date: 1, time: 1 });
    
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. POST (Create) a new appointment
app.post('/api/appointments', async (req, res) => {
  // Extracting data from the client request
  const { name, email, service, date, time } = req.body; 

  const newAppointment = new Appointment({
    clientName: name,
    email,
    service,
    date,
    time, 
    status: 'Confirmed' // Changed to 'Confirmed' per your snippet (change to 'Pending' if needed)
  });

  try {
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));