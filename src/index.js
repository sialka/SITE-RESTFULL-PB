const express = require('express');
const app = express();

app.get('/produtos', (req, res) => {
	res.send('Olá');
});

app.listen(3001, () => {
	console.log('Server running port 3001');
});