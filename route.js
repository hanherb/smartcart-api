const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

router.route('/get-api').get(function(req, res) {
	console.log(req.body);
});

module.exports = router;