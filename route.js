const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.route('/get-api').get(function(req, res) {
	console.log(req.body);
});

router.route('/post-api').post(function(req, res) {
	var raw = req.body.data;
	// var terminal = raw.match(/Terminal#[ -~\t]+/);
	// var table = raw.match(/Table#[ -~\t]+/);
	// var guest = raw.match(/Guests[ -~\t]+/);
	// var server = raw.match(/Server[ -~\t]+/);
	// var printed = raw.match(/Printed[ -~\t]+/);
	// var item = raw.match(/@A[ -~\t]+/);

	// var json = {
	// 	terminal: terminal[0],
	// 	table: table[0],
	// 	guest: guest[0],
	// 	server: server[0],
	// 	printed: printed[0],
	// 	item: item[0]
	// }
	// console.log(json);
	console.log(raw);
	res.json(raw);
});

module.exports = router;