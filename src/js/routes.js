'use strict';

const ObjectID = require('mongodb').ObjectID;

module.exports = function(app, db) {
	app.get('/user/:id', function(req, res) {
		const id = req.params.id;
		const user = { '_id': new ObjectID(id) };
		db.collection('users').findOne(user, function(err, item) {
			if (err) {
				res.send({ 'error': 'Error: cannot find user by id ' + id });
			} else {
				res.send(item);
			}
		});
	});

	app.get('/user/', function(req, res) {
		return 0;
	});

	app.get('/users', function(req, res) {
		db.collection('users').find({}).toArray(function(err, users) {
			if (err) {
				res.send(err);
			} else {
				res.send(users);
			}
		});
	});

	app.post('/', function(req, res) {
		const user = {
			'firstName': req.body.firstName,
			'lastName': req.body.lastName,
			'email': req.body.email,
			'phone': req.body.phone
		};
		db.collection('users').insert(user, function(err, result) {
			if (err) {
				res.send({ 'error': 'Cannot add user' });
			} else {
				res.redirect('/');
			}
		});
	});

	app.post('/update/:id', function(req, res) {
		const id = { '_id': new ObjectID(req.params.id) };
		const user = { $set: {
				'firstName': req.body.firstName,
				'lastName': req.body.lastName,
				'phone': req.body.phone
			}
		};
		db.collection('users').update(id, user, { upsert: false }, function(err, result) {
			if (err) {
				res.send({ 'error': 'Could not update user ' + req.body.firstName + ' ' + req.body.lastName });
			} else {
				res.redirect('/');
			}
		});
	});

	app.post('/delete/:id', function(req, res) {
		const id = { '_id': new ObjectID(req.params.id) };
		db.collection('users').remove(id, function(err, result) {
			if (err) {
				res.send({ 'error': 'Could not delete user.' });
			} else {
				res.redirect('/');
			}
		});
	});
};
