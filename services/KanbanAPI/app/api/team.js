const mongoose = require('mongoose');

const api = {};

api.create = (Team) => (req, res) => {
	const team = new Team({
		name: req.body.name,
		detail: req.body.detail,
		website: req.body.website,
		author: req.body.author
	});
	team.save((error) => {
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ success: true });
	});
}

api.edit = Team => (req, res) => {
	team.update({ _id.req.body.teamId }, { $set: { name: req.body.name, detail: req.body.detail, website: req.body.website } }, (error) =>{
		if (error) return res.status(200).json({ success: false, message: error });
		res.status(200).json({ success: true });
	});
}

module.exports = api;
