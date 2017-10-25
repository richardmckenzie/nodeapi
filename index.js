
//====LIST DEPENDENCIES===//
const parseurl = require('parseurl');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const Signature = require('./models/signature.js')
const url = process.env.MONGOLAB_URI;
const bodyParser = require('body-parser');
var express = require('express')
        , cors = require('cors')
        , app = express();
      app.use(cors({
        origin:["*"],
        methods:["POST","GET","PUT","DELETE"],
        allowHeaders:["Content-Type","Authorization"]
      })); // use CORS for all requests and all routes
      app.use(express.favicon());
      app.use(bodyParser.json());
      app.use(app.router);

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
app.post('/api/signatures', bodyParser, function(req, res) {
  Signature.create({
    guestSignature: req.body.SignatureOfGuest,
    message: req.body.MessageOfGuest,
  }).then(signature => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE'); // If needed
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,contenttype'); // If needed
    res.setHeader('Access-Control-Allow-Credentials', true); // If needed
    res.send('cors problem fixed:)');
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
