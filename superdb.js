var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost/superDB';

         
MongoClient.connect(url, function(err, db) {
    
    var cursor = db.collection('user').find();
     cursor.each(function (err, doc) {
        console.log(doc);
    });
    
    db.close();
});


