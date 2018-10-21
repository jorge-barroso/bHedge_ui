var express = require('express');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  //If session doesn't exist or hasn't been populated, the user must log in
  if(req.session == undefined || req.session.address == undefined)
    res.redirect("/login");

    res.render('index', {
      title: 'bHedge',
      walletID: req.session.address,
      walletAmount:'testamount',
      totalTraded:'totaltraded example'

     });
});


module.exports = router;
