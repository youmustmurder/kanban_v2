const model = require('@Kanban/app/setup'),
			passport = require('passport'),
			config = require('@config');

module.exports = (app) => {
	const api = app.KanbanAPI.app.api.project.task;

	app.use('/api/', (req, res, next) => {
		if (app.get('kanbansecret')) {
			next();
		} else {
			res.status(401).json({ success: false, message: 'Unauthorization' });
		}
	});

	app.route('/api/add_task')
						.post(passport.authenticate('jwt', config.session), api.addTask(model.Project, model.Task, app.get('kanbansecret')));

	app.route('/api/save_task')
						.post(passport.authenticate('jwt', config.session), api.saveTask(model.Project, model.Task, app.get('kanbansecret')));
}
