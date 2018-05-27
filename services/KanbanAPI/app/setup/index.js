const mongoose = require('mongoose'),
      UserModel = require('@KanbanModels/user'),
      TaskModel = require('@KanbanModels/task'),
      ProjctModel = require('@KanbanModels/project');

const models = {
  User: mongoose.model('User'),
  Task: mongoose.model('Task'),
  Project: mongoose.model('Project')
}

module.exports = models;
