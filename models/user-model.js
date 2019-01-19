const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	username: { type: String, required: true,unique: true  },
	// add image
	password: { type: String, required: true }
});



const Users = mongoose.model("Users", usersSchema);

module.exports = Users;