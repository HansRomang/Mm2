const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
	title: { type: String, required: true },
	// add image
  price: { type: Number, required: true },
	description: { type:String, required: true},
	date: { type: Date, default: Date.now }
});

const Items = mongoose.model("Items", itemsSchema);

module.exports = Items;