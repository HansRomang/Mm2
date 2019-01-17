const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const usersSchema = new Schema({
	Name: { type: String, required: true, index: {unique: true } },
	// add image
	Password: { type: Number, required: true }
});



const Users = mongoose.model("Users", usersSchema);

module.exports = Users;