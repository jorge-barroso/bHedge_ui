var express = require('express');
var router = express.Router();
const request = require("request")

const loginRequest = function(body) {
  return new Promise((resolve, reject) => {
    request ({
      url: "http://localhost:5555/login",
      method: "POST",
      json: body
    }, function(error, response, body) {
      if(error)
        reject(Error("Error during request"));
      console.log(body);
      resolve(body)
    });
  });
}

/* GET LOGIN page. */
router.get('/', function(req, res, next) {
    res.render('login', {
      title: 'bHedge Project'
     });
});

router.post('/', function(req, res, next) {
  newSession = req.session

  console.log("Requesting login details")
  loginRequest(req.body).then((value) => {
      newSession.id = value[0];
      newSession.username = value[1];
      newSession.email = value[2];
      newSession.address = value[4]
      newSession.save();
      res.redirect("/");
  })
});



module.exports = router;