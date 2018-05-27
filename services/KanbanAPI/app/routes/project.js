const model = require('@Kanban/app/setup'),
			passport = require('passport'),
			config = require('@config');

module.exports = (app) => {
	const api = app.KanbanAPI.app.api.project;
	app.route('/api/project_setup')
						.get(api.setup(model.Project));
	app.route('/api/projects')
						.get(passport.authenticate('jwt', config.session), api.getAll(model.Project, app.get('kanbansecret')))
						.post(passport.authenticate('jwt', config.session), api.addProject(model.Project, app.get('kanbansecret')));
}
