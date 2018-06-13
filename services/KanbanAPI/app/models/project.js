const mongoose = require('mongoose'),
			List = require('@KanbanModels/list');

const Project = mongoose.Schema({
	name: {
		type: 'String'
	},
	description: {
		type: 'String'
	},
	list: [ List ],
});

mongoose.model('Project', Project);
