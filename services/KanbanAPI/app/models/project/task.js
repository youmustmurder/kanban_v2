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

module.exports = Task;

mongoose.model('Task', Task);
