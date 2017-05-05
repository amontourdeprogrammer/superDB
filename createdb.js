
function createUser(err, db){
    db.collection('user').insertOne({
            name: 'Super Potato',
            age: 5,
            alias: 'Potato',
            address: '1 rue des French Fries'
    });
}

function readUser(err, db) {
    var cursor = db.collection('user').find();
    cursor.each(function (err, doc) {
    console.log(doc);
 }
}


function updateUser(err,db) {
    db.collection('user').updateOne({
        {alias: "Mario"}, //Condition
        {$set: {address: " "}} //Update
    });
}

function deleteUser(err, db){
    db.collection('user').deleteOne({alias: 'Potato'}); 
}


MongoClient.connect(url, create);

var superPotato = {
            name: 'Super Potato',
            age: 5,
            alias: 'Potato',
            address: '1 rue des French Fries'
    };

MongoClient.connect(url, function(err, db) {

    db.collection('user').insertOne(superPotato);
});


