const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema({
  title: String,
  description: String,
  label: String,
  day: { type: Date, required: true },
  participants: [String],
  time: String,
  duration: String,
  sessionNotes: String,
});

const CalendarEvent = mongoose.model('CalendarEvent', calendarEventSchema);

module.exports = CalendarEvent;
