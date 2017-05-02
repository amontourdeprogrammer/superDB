var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/superDB';

MongoClient.connect(url, function(err, db) {
    db.collection('user').insertOne({
        name: 'Super Potato',
        age: 5,
        alias: 'Potato',
        address: '1 rue des French Fries'
    });
 
    
    var cursor = db.collection('user').find();
     cursor.each(function (err, doc) {
        console.log(doc);
    });
    
    db.close();
});


