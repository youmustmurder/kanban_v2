const mongoose = require('mongoose');

const api = {};

api.addTask = (Project, Task, token) => (req, res) => {
	let task = new Task({
		name: req.body.task.name,
		detail: req.body.task.detail,
		time: req.body.task.time,
		risk: req.body.task.risk
	});
	Project.findById(req.body.projectId, (error, data) => {
		if (error) return res.status(200).json({ success: false, message: error });
		data.list.id(req.body.listId).tasks.push(task);
		data.save(error => {
			if (error) return res.status(200).json({ success: false, message: error });
			res.status(200).json({ success: true, message: 'Задача создана' });
		});
	});
}

api.saveTask = (Project, Task, token) => (req, res) => {
	Project.findById(req.body.projectId, (error, data) => {
		if (error) return res.status(200).json({ success: false, message: error });
		data.list.id(req.body.listId).tasks.id(req.body.task._id).set(req.body.task);
		data.save();
		return res.status(200).json({ success: true });
	});
}

module.exports = api;
