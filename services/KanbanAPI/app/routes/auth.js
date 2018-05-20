const model = require('@Kanban/app/setup');

module.exports = (app) => {
  const api = app.KanbanAPI.app.api.auth;

  app.route('/')
          .get((req, res) => res.send('Kanban API'));
  app.route('/api/auth')
          .post(api.login(model.User));
}
