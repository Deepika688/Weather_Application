var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;


// the code defines a route handler for the root path ("/"). When a GET request is made
//  to this path, the server will respond with the message "respond with a resource". 
// The route handler is then exported so that it can
//  be used in other parts of the application to handle user requests.