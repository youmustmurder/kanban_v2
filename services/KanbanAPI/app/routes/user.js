const model = require('@Kanban/app/setup'),
			passport = require('passport'),
			config = require('@config');

module.exports = (app) => {
	const api = app.KanbanAPI.app.api.user;
	app.route('/api/users')
			.get(passport.authenticate('jwt', config.session), api.getUsers(model.User, app.get('kanbansecret')));
	app.route('/api/signup')
			.post(api.signup(model.User));
	app.route('/api/setup')
			.get(api.setup(model.User));
}
