const moment = require('moment-timezone');
const express = require('express');
const router = express.Router();
const CalendarEvent = require('../model/eventModel');

// Route for adding a new event
router.post('/', async (req, res) => {
  const eventData = req.body;

  try {
    const receivedDate = eventData.day;
    const istDate = moment.utc(receivedDate, 'YYYY-MM-DD').toDate();
    // Create a new event object with the converted date
    const newEvent = new CalendarEvent({
        ...eventData,
        day: istDate
      });
    // Save the event data to MongoDB
    console.log('Received eventData:', eventData);
    const savedEvent = await newEvent.save();
    // Log savedEvent
    console.log('Saved Event:', savedEvent);

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error saving event:', error);
    res.status(500).json({ error: 'An error occurred while saving the event.' });
  }
});

module.exports = router;
