var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
 
    res.render('index', { 
      title: 'bHedge Project',
      walletID: 'testid',
      walletAmount:'testamount',
      totalTraded:'totaltraded example'

     });
 
  
});


module.exports = router;
