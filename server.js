var express = require('express');

// HTTP entity body parser

var bodyParser = require('body-parser');

var app = express();

// ability to parse JSON

app.use(bodyParser.json());

app.all('*', function (req, res) {

  var out = req.method + "\n" + req.originalUrl + "\n" + JSON.stringify(req.body);
  res.send("Here's what I got...\n\n" + out);

  
  console.log("\n--- New Request ---\n" + out);
});

var server = app.listen(8888, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});