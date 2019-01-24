const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');
const routes = require("./routes");
const app = express();
const PORT = 3001;

app.use(express.urlencoded({extended: true}));
app.use(express.json());
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
 } 

app.use(routes);

mongoose.connect(
	process.env.MONGODB_URI || "mongodb://localhost/everything123"
);


app.listen(PORT, function(){
	console.log("API workin");
})