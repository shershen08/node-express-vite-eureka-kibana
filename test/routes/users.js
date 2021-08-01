var express = require('express');
const users = require('../mocks/users.json');
var router = express.Router();


/* GET users listing. */
router.get('/', function(req, res, next) {
  setTimeout(() => {
    res.send(users);
  }, 1500)
  
});

module.exports = router;
