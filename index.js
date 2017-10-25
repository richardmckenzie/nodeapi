
//====LIST DEPENDENCIES===//
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/signature.js')
const url = process.env.MONGOLAB_URI;
var express = require('express')
        , app = express();

  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "https://warm-mesa-85711.herokuapp.com");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE"); // If needed

    next();
  });

  app.use(require("body-parser").json());

//====ROOT DIRECTORY===//
app.get('/', function(req, res) {
  res.json('hi you did it');
});
//==========================//
//====GET ALL SIGNATURES===//
app.get('/api/signatures', function(req, res) {
  Signature.find({}).then(eachOne => {
    res.json(eachOne);
    })
  })
//==========================//
//====POST NEW SIGNATURE===//
app.post('/api/signatures', function(req, res) {

  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageOfGuest,
  }).then(signature => {
    res.json(signature)
   });


});
//==========================//

//====MONGOOSE CONNECT===//
mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});
//==========================//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');
