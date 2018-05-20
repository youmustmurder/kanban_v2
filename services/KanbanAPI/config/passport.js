const PassportJwt = require('passport-jwt'),
			JwtStrategy = require('passport-jwt').Strategy,
			ExtractJwt = require('passport-jwt').ExtractJwt,
			model = require('./index.js'),
			config = require("@config");

module.exports = (passport) => {
	const User = model.User;
	const parametrs = {
		secretOrKey: config.secret,
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
	};
	passport.use(new JwtStrategy(parametrs, (payload, done) => {
		User.findOne({ id: payload.id }, (error, user) => {
			if (error) return done(error, false);
			if (user) done(null, user); else done(null, false);
		});
	}));
}
