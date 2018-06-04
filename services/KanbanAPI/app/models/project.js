const mongoose = require('mongoose');

const Task = mongoose.Schema({
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
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

const List = mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	tasks: [ Task ]
});

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
mongoose.model('List', List);
mongoose.model('Task', Task);
