var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('angular-index', { title: 'AGStats', library: 'Angular'});
});

/* GET home page. */
router.get('/angular/batting', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  res.render('batting', { title: 'Batting', library: 'Angular'});
});
// // Angular Start page
// router.get('/angular', function(req, res, next) {
//   res.render('angular', { title: 'AGStats', library: 'Angular'});
// });




module.exports = router;
