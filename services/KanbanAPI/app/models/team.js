const mongoose = require('mongoose');

const Team = mongoose.Schema({
	nane: {
		type: String,
		required: true
	},
	detail: {
		type: String
	},
	website: {
		type: String
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User'
	}
});

mongoose.model('Team', Team);
