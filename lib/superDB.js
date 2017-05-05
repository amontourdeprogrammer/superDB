var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/superDB';


function readUser(name, callback){

	 MongoClient.connect(url, function(err, db) {
	 	var returnedUser = db.collection('user').find({alias: "Mario"}, {alias:1});
	 	callback(returnedUser);
	});
}
	// return eql(['_id: 590881bc7b43d98c1b9efe66', 'alias: Mario']);

module.exports = readUser;

/**
function readUser(err, db) {
    var cursor = db.collection('user').find({alias: "Mario"}, {alias:1}, {'_id': 1});
    cursor.each(function (err, doc) {
    console.log(doc);
 });
}

MongoClient.connect(url, readUser);

module.exports = readUser;
**/