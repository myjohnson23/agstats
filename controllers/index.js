var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Angular Start page
router.get('/angular', function(req, res, next) {
  res.render('angular', { title: 'Angular Start', library: 'Angular'});
});
module.exports = router;
