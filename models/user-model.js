const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	displayname: { type: String, required: true },
	email: { type: String, required: true },
	username: { type: String, required: true,unique: true  },
	password: { type: String, required: true }
});



const Users = mongoose.model("Users", usersSchema);

module.exports = Users;