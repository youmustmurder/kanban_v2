const mongoose = require('mongoose');

const api = {};

api.setup = (Project) => (req, res) => {
	const project = new Project({
		name: 'Проект 1',
		description: 'Описание проекта'
	});
	project.save(error => {
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ success: true, message: 'Проект создан' });
	});
}

api.getAll = (Project, token) => (req, res) => {
	if (token) {
		Project.find({}, (error, project) => {
			res.status(200).json({ project });
		});
	} else {
		res.status(401).json({ success: false, message: 'Unauthorization' });
	}
}

api.addProject = (Project, token) => (req, res) => {
	if (token) {
		const project = new Project({
			name: req.body.name,
			description: req.body.description
		});
		project.save(error => {
			if (error) return res.status(200).json({ success: false, message: error });
			res.status(200).json({ success: true, message: 'Проект создан' });
		});
	} else {
		res.status(401).json({ success: false, message: 'Unauthorization' });
	}
}

module.exports = api;
