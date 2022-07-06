const mongoose = require('mongoose');

const flightSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now()
  },
});

const Flight = new mongoose.model("flight", flightSchema);

module.exports = Flight;