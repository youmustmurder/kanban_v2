const mongoose = require('mongoose');

const api = {};

api.setup = (Project) => (req, res) => {
	const project = new Project({
		name: 'Проект 1',
		description: 'Описание проекта',
		list: [
			{
				name: 'В работу',
				tasks: [
					{
						name: 'Таск 1',
						detail: 'Описание задачи'
					},
					{
						name: 'Таск 2',
					}
				]
			},
			{
				name: 'В работе',
				tasks: [
					{
						name: 'Таск 3'
					}
				]
			},
			{
				name: 'В работе'
			}
		]
	});
	project.save(error => {
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ success: true, message: 'Проект создан' });
	});
}

api.getProjectsAll = (Project, token) => (req, res) => {
	Project.find({}, { list: 0 } , (error, project) => {
		res.status(200).json({ project });
	});
}

api.getProject = (Project, token) => (req, res) => {
	Project.findOne({ _id: req.params.id }, (error, project) => {
		if (error) return res.status(200).json({ success: false, message: 'Проект не найден' });
		res.status(200).json({ project });
	});
}

api.addProject = (Project, token) => (req, res) => {
	const project = new Project({
		name: req.body.name,
		description: req.body.description
	});
	project.save(error => {
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ success: true, message: 'Проект создан' });
	});
}

api.addList = (Project, token) => (req, res) => {
	const list = new Project({
		name: req.body.name
	});
	Project.update({ _id: req.body.projectId }, { $push: { list: list } }, (error, project) => {
		if (error) res.status(200).json({ success: false, message: 'Что-то пошло не так', error });
		res.status(200).json({ success: true });
	});
}

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
