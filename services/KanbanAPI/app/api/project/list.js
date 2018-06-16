const mongoose = require('mongoose');

const api = {};

api.addList = (Project, token) => (req, res) => {
	const list = new Project({
		name: req.body.name
	});
	Project.update({ _id: req.body.projectId }, { $push: { list: list } }, (error, project) => {
		if (error) res.status(200).json({ success: false, message: 'Что-то пошло не так', error });
		res.status(200).json({ success: true });
	});
}

module.exports = api;
