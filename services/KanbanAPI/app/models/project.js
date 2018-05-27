const mongoose = require('mongoose');

const Schema = mongoose.Schema({
	name: {
		type: 'String'
	},
	description: {
		type: 'String'
	}
});

mongoose.model('Project', Schema);
