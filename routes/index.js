var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Overview' });
});

/* GET Settings page. */
router.get('/settings', function(req, res, next) {
  res.render('settings', { title: 'Settings' });
});

module.exports = router;
