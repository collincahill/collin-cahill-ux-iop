'use strict';

const functions = require('firebase-functions');

const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

exports.addUser = functions.https.onRequest((req, res) => {
	if (req.method !== 'POST') {
		res.status(400);
		return;
	}
	let previous = req.header('Referer') || '';
	admin.database().ref('/users/').push(req.body);
	res.redirect('localhost:5000');
});

exports.deleteUser = functions.https.onRequest((req, res) => {
	if (req.method !== 'POST') {
		res.status(400);
		return;
	}
	let uid = req.body.uid;
	let previous = req.header('Referer') || '';
	admin.database().ref('/users/' + uid).remove();
	res.redirect('localhost:5000');
});

exports.updateUser = functions.https.onRequest((req, res) => {
	if(req.method !== 'POST') {
		res.status(400);
		return;
	}
	let updateData = req.body;
	console.log(req.body);
	res.redirect('localhost:5000');
});
