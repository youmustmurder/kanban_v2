const mongoose = require('mongoose'),
      UserModel = require('@KanbanModels/user'),
      ProjctModel = require('@KanbanModels/project'),
      TaskModel = require('@KanbanModels/task'),
      ListModel = require('@KanbanModels/list');

const models = {
  User: mongoose.model('User'),
  Project: mongoose.model('Project'),
  List: mongoose.model('List'),
  Task: mongoose.model('Task')
}

module.exports = models;
