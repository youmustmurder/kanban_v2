const model = require('@Kanban/app/setup'),
			passport = require('passport'),
			config = require('@config');

module.exports = (app) => {
	const api = app.KanbanAPI.app.api.team;

	app.route('/api/create_team')
			.post(passport.authenticate('jwt', config.kanbansecret), api.create(model.Team, app.get('kanbansecret')));
}
