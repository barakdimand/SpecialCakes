var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET sign in page. */
router.get('/', function(req, res, next) {
  res.render('sign_in', { title: 'Express' });
});

module.exports = router;
