const mongoose = require('mongoose'),
      UserModel = require('@KanbanModels/user'),
      TaskModel = require('@KanbanModels/task');

const models = {
  User: mongoose.model('User'),
  Task: mongoose.model('Task')
}

module.exports = models;
