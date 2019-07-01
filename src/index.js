const express = require("express");
const request = require("request-promise-native");

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/produtos', async(req, res) => {
	const result = await request.get('http://localhost:3000/api/v1/products');
	// console.log(JSON.parse(result).data);
	// res.send('Olá');
	res.render('products');

});

app.listen(3001, () => {
	console.log('Server running port 3001');
});