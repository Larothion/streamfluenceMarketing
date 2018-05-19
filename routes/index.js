var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home');
});

router.get('/home', function(req, res) {
  res.render('home');
});

router.get('/brands', function(req, res) {
  res.render('brands');
});

router.get('/pricing', function(req, res) {
  res.render('pricing');
});

router.get('/streamers', function(req, res) {
  res.render('streamers');
});
module.exports = router;
