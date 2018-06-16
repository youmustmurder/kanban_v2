const model = require('@Kanban/app/setup'),
			passport = require('passport'),
			config = require('@config');

module.exports = (app) => {
	const api = app.KanbanAPI.app.api.project.list;

	app.use('/api/', (req, res, next) => {
		if (app.get('kanbansecret')) {
			next();
		} else {
			res.status(401).json({ success: false, message: 'Unauthorization' });
		}
	});

	app.route('/api/task_list')
						.post(passport.authenticate('jwt', config.session), api.addList(model.Project, app.get('kanbansecret')));
}
