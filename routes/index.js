var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/what', function(req, res) {
  res.render('what', { title: 'Express' });
});

module.exports = router;
