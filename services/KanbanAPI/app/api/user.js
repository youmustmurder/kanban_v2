const mongoose = require('mongoose');

const api = {};

api.setup = (User) => (req, res) => {
  const admin = new User({
    username: 'admin',
    password: 'admin',
    firstname: 'Slava',
    lastname: 'Ustinov',
    funct: 'fullstack developar'
  });
  admin.save(error => {
    if (error) throw error;
    res.json( {success: true} );
  });
}

api.signup = (User) => (req, res) => {
  if (!req.body.username || !req.body.password || !req.body.firstname || !req.body.lastname) res.json({ success: false, message: 'Please, pass data' })
  else {
    const user = new User({
      username: req.body.username,
      password: req.body.password,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      func: req.body.func
    });
    user.save(error => {
      if (error) res.status(400).json({ success: false, message: 'Username already exists' });
      res.json({ success: true, message: 'Account created successfully' });
    })
  }
}

api.setTeam = (User) => (req, res) => {
  User.update(req.body.userId, { $set: { team: req.body.teamId } }, (error) => {
    if (error) return res.status(200).json({ success: false, message: message });
    res.status(200).json({ success: true });
  });
}

api.getUsers = (User, token) => (req, res) => {
  if (token) {
    User.find({}, (error, user) => {
      if (error) return error;
      res.status(200).json(user);
    });
  } else {
    return res.status(401).json({ success: false, message: 'Unauthorization' });
  }
}

module.exports = api;
