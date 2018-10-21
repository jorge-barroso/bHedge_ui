var express = require('express');
var router = express.Router();

/* GET LOGIN page. */
router.get('/', function(req, res, next) {
 
    res.render('login', { 
      title: 'bHedge Project'
     

     });
 
  
});

module.exports = router;