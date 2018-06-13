const mongoose = require('mongoose'),
			Task = require('@KanbanModels/task');

const List = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	tasks: [ Task ]
});

module.exports = List;

mongoose.model('List', List);
