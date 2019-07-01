const express = require("express");
const request = require("request-promise-native");

const app = express();

app.get('/produtos', async(req, res) => {
	const result = await request.get('http://localhost:3000/api/v1/products');
	res.send('Olá');
});

app.listen(3001, () => {
	console.log('Server running port 3001');
});