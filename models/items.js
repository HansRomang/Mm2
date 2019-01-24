const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
	title: { type: String, required: true },
	// add image
  price: { type: Number, required: true },
	description: { type:String, required: true},
	location: { type:String, require: true},
	date: { type: Date, default: Date.now },
	cloudUrl: { type: String, require: true},
	cloudPublicId: { type: String, require: true},
	
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;