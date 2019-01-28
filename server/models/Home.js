const mongoose = require('mongoose');

const Home = mongoose.model('Home', {
  about: {
    type: Array,
    required: true,
  },
  img: {
    type: String,
    required: true
  },
  colors: {
    type: Object,
    required: true,
  },
  marginAmount: {
    type: Number,
    required: true
  },
  typerText: {
    type: Array,
    required: true
  }
});

module.exports = {Home};