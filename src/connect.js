const mongo = require('mongodb').MongoClient

function doConnect() {
 	var url = 'mongodb://${process.env.USERNAME}:${process.env.PASSWORD}@ds155774.mlab.com:55774/marketmendb'
	mongo.connect(url, (err, db) => {
		if(err) { 
			throw err
		} else {
			console.log('Successfully connected to MongoDB')
		}
	})
}
doConnect()