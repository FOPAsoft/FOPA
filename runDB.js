var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('FOP');

db.serialize(function () {
	db.run ('CREATE TABLE user (id INT name TEXT)');
	var stmt = db.prepare('INSERT INTO user values(?,?)');

	for (var i = 0; i < 10; i++) {
		var d = new Date();
		var n = d.toLocateTimeString();

		}
	stmt.finalize();

	db.each('SELECT id, name FROM user',function(err,row))
	{
		console.log('User id:'+row.id+'  name:'+row.name);

	}
db.close();
})