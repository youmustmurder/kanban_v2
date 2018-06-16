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
	Project.find({ teamId: req.body.teamId }, { list: 0 } , (error, project) => {
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ project });
	});
}

api.addProject = (Project, token) => (req, res) => {
	const project = new Project({
		name: req.body.name,
		description: req.body.description,
		linkTechTask: req.body.linkTechTask,
		deadline: req.body.deadline,
		teamId: req.body.teamId
	});
	project.save(error => {
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ success: true, message: 'Проект создан' });
	});
}

api.getProject = (Project, token) => (req, res) => {
	Project.findOne({ _id: req.params.id }, (error, project) => {
		if (error) return res.status(200).json({ success: false, message: 'Проект не найден' });
		res.status(200).json({ project });
	});
}

module.exports = api;
