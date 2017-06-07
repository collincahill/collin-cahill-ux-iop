'use strict';

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');

const app = express();
const port = 8000;
const db = 'mongodb://localhost:27017/users';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname));

MongoClient.connect(db, function(err, database) {
	if (err) { return console.log(err); }
	require('./src/js/routes')(app, database);


	app.listen(port, function() {
		console.log('localhost:' + port);
	});
});
