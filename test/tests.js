var expect = require('expect.js');

var MongoClient = require('mongodb').MongoClient;

const readUser = require('../lib/superDB');
var db = 'mongodb://localhost/superDB';

describe("superDB", function(){
    it("Reads by name", function(done){
    	readUser("Mario", function(readUsers) {
           expect(readUsers).to.eql(['_id: 590881bc7b43d98c1b9efe66', 'alias: Mario']); 		
    	});
    });
});