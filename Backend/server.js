// backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const eventRoutes = require('./routes/events');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors())

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/calendarApp', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

// Middleware
app.use(express.json());

// Routes
app.use('/events', eventRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
