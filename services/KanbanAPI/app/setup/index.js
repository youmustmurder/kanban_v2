const mongoose = require('mongoose'),
      UserModel = require('@KanbanModels/user'),
      TeamModel = require('@KanbanModels/team'),
      ProjctModel = require('@KanbanModels/project/project'),
      TaskModel = require('@KanbanModels/project/task'),
      ListModel = require('@KanbanModels/project/list');

const models = {
  User: mongoose.model('User'),
  Project: mongoose.model('Project'),
  List: mongoose.model('List'),
  Task: mongoose.model('Task'),
  Team: mongoose.model('Team')
}

module.exports = models;
