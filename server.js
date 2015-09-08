#!/usr/bin/env node

var express = require('express');

// HTTP entity body parser

var bodyParser = require('body-parser');

var app = express();


// Your own super cool function
var logger = function(req, res, next) {
  console.log("GOT REQUEST !");
  next(); // Passing the request to the next handler in the stack.
};

app.use(logger);

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

  // make a pretty message with request info
  var out = req.method + " " + req.originalUrl + "\n\n- - - Request Headers - - -\n" + 
    headers + "\n- - - Request Body - - -\n" + JSON.stringify(req.body, null, 2);
  
  // send message to client
  var responseBody = require('./responseBody');
  var transactionId = req.query.transactionId || 'good';
  
  var body = responseBody[transactionId];
  var responseHeaders = {
    "Cache-Control": "no-store, no-cache, must-revalidate, post-check=0, pre-check=0",
    "Content-Type": "application/json; charset=utf-8",
    "Expires": "Thu, 19 Nov 1981 08:52:00 GMT"
  };
  
  res.set(responseHeaders);
  
  res.send(body);
  
  // log message to console
  console.log("\n*** " + new Date().toString() + " ***\n\n" + out);

});



var server = app.listen(8888, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
  
});