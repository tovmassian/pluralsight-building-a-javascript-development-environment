import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from './../webpack.config.dev';

/* eslint-disable no-console */

const app = express();
const port = 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath,
}));

app.get('/', function(req, res) {
	res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.get('/users', function(req, res) {
	// this could have come from real DB
	res.json([
		{'id': 1, 'firstName': 'Khachatur', 'lastName': 'Tovmasyan', 'email': 'khacho@mail.com'},
		{'id': 2, 'firstName': 'Anna', 'lastName': 'Grigoryan', 'email': 'annagrif@gmail.com'},
		{'id': 3, 'firstName': 'Lusine', 'lastName': 'Davtyan', 'email': 'lusinedactyan@mail.com'},
	]);
});

app.listen(port, function(err) {
	if (err) {
		console.log(err);
	} else {
		open('http://localhost:' + port);
	}
});
