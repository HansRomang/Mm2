const db = require('../models');

// Defining methods for the booksController
module.exports = {
  findAll: function(req, res) {
		console.log("hello is this working?")
    db.User
      .find(req.query)
      .sort({ _id: id })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.User
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: function(req, res) {
		console.log("Create User", req.body);
    db.User
      .create(req.body)
			.then(dbModel => {
				console.log(dbModel);
				res.json(dbModel)
				})
			.catch(err => 
				{
					console.log(err);
					res.status(422).json(err)
				});
	},
	login: function(req, res) {
		db.User
		.find({username: req.body.username})
		.then(user => {
			res.send({user:user, status:200, message:"Login Successful!"})
		})
	}
};
