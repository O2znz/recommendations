// import express, express.router, controller file, & cors
const express = require('express');
const router = express.Router();
const controller = require('./apiControllers');

// define timeLog function to use as test
// sends back string on req
var timeLog = (req, res) => {
  var time = `${Date.now()}`;
  res.send(time);
};

// test get req to api route
router.get('/', (req, res) => {
  res.status(200).send('API is working!');
});

// test get req for timeLog function
router.get('/time', timeLog);

// use controller function for get req to /recommendations route
router.get('/recommendations', controller);

// export router object
module.exports = router;