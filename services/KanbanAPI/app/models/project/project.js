const mongoose = require('mongoose'),
			List = require('@KanbanModels/list');

const Project = mongoose.Schema({
	name: {
		type: String
	},
	description: {
		type: String
	},
	linkTechTask: {
		type: String
	},
	dateCreate: {
		type: Date
	},
	deadline: {
		type: Date
	},
	teamId: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'team'
	},
	participants: [
		user: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'user'
		}
	]
	list: [ List ],
});

Project.pre('save', (next) => {
	if (this.isNew) {
		this.dateCreate = Date.now();
	}
});

mongoose.model('Project', Project);
