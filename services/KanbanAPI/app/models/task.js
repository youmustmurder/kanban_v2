const mongoose = require("mongoose");

const Schema = mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true
  },
  name: {
    type: String
  },
  detail: {
    type: String
  },
  time: {
    type: Number,
    default: 0
  },
  risk: {
    type: Number,
    default: 0
  },
  status: {
    type: Number,
    default: 0
  }
});

mongoose.model('Task', Schema);
