// controllers for requests to api routes
// import mongoose
const mongoose = require('mongoose');
// const recommendations = require('../database/index');

// create connection to database
mongoose.connect('mongodb://localhost/recommendations', { useNewUrlParser: true });

// set connection var and define callback for connection
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to DB!'));
db.once('open', () => {
  console.log('Connected to DB!');
});
// find some way to close connection to database

// callback function to get all recommendations from database
const getAllData = (req, res, next) => {
  db.collection('recommendations').find().toArray((err, result) => {
    if (err) {
      return res.status(404).send(err);
    } else {
      return res.status(200).send(result);
    }
  });
};

// export callback function
module.exports = getAllData;