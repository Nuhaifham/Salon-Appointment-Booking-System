const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB (Make sure your URL is correct)
// 'mongo' is the service name defined in your docker-compose.yml
mongoose.connect('mongodb://mongo:27017/styledSalon', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// --- THE FIX IS HERE (Schema) ---
const appointmentSchema = new mongoose.Schema({
  clientName: String,
  email: String,
  service: String,
  date: Date,
  time: String, // <--- We added this!
  status: { type: String, default: 'Pending' } // <--- Default status
});

const Appointment = mongoose.model('Appointment', appointmentSchema);

// Routes

// 1. GET all appointments
app.get('/api/appointments', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// 2. POST (Create) a new appointment
app.post('/api/appointments', async (req, res) => {
  // We extract 'time' from the request now
  const { name, email, service, date, time } = req.body; 

  const newAppointment = new Appointment({
    clientName: name,
    email,
    service,
    date,
    time, // <--- Saving the time to DB
    status: 'Confirmed' // <--- CHANGE THIS to 'Pending' if you want approval process
  });

  try {
    const savedAppointment = await newAppointment.save();
    res.status(201).json(savedAppointment);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//start the server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));