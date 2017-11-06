//====LIST DEPENDENCIES===//
const parseurl = require('parseurl');
const bodyParser = require('body-parser').json();
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/signature.js')
const url = process.env.MONGOLAB_URI;
var express = require('express')
        , cors = require('cors')
        , app = express();
      app.use(cors()); // use CORS for all requests and all routes

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
  res.setHeader('Access-Control-Allow-Origin', 'http://www.flosflowers.co.nz');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
  res.setHeader('Access-Control-Allow-Credentials', true); // If needed

  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageOfGuest,
 }).then(signature => {
   res.send('cors problem fixed:)' + signature);
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
