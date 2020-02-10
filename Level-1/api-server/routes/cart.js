var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser')

const redis = require("redis");
const client = redis.createClient();

router
  .post('/', bodyParser.json(), function (req, res, next) {
    let course = req.body;
    client.lpush("praveen_cart", JSON.stringify(course), (err) => {
      res.json(course)
    })
  })
  .get('/', function (req, res, next) {
    client.lrange("praveen_cart", 0, -1, (err, result) => {
      if (err) throw err;
      res.json(result)
    })
  });


module.exports = router;
