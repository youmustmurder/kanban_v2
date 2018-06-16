const model = require('@Kanban/app/setup'),
			passport = require('passport'),
			config = require('@config');

module.exports = (app) => {
	const api = app.KanbanAPI.app.api.project.project;

	app.use('/api/', (req, res, next) => {
		if (app.get('kanbansecret')) {
			next();
		} else {
			res.status(401).json({ success: false, message: 'Unauthorization' });
		}
	});

	app.route('/api/project_setup')
						.get(api.setup(model.Project));

	app.route('/api/projects')
						.get(passport.authenticate('jwt', config.session), api.getProjectsAll(model.Project, app.get('kanbansecret')))
						.post(passport.authenticate('jwt', config.session), api.addProject(model.Project, app.get('kanbansecret')));

	app.route('/api/project/:id')
						.get(passport.authenticate('jwt', config.session), api.getProject(model.Project, app.get('kanbansecret')));

}
