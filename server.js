var express = require('express');

// HTTP entity body parser

var bodyParser = require('body-parser');

var app = express();

// ability to parse JSON

app.use(bodyParser.json());

app.all('*', function (req, res) {

  var headers = "";

  // convert map of headers to string for logging
  Object.keys(req.headers).forEach(function(key){
    if(key && req.get(key)){
      headers += key + ": " + req.get(key) + "\n";
    }
  });

  // make a pretty message
  var out = req.method + " " + req.originalUrl + "\n\n- - - Headers - - -\n" + 
    headers + "\n- - - Body - - -\n" + JSON.stringify(req.body, null, 2);
  
  // send message to client
  res.send("Here's what I got...\n\n" + out);

  // log message to console
  console.log("\n*** " + new Date().toString() + " ***\n\n" + out);

});

var server = app.listen(8888, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);


});