// controllers for requests to server
const mongoose = require('mongoose');
const recommendations = require('../database/index.js');

mongoose.connect('mongodb://localhost/recommendatinos');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to DB!'));
db.once('open', () => {
  console.log('Connected to DB!');
  // eslint-disable-next-line no-use-before-define
});


const getAllData = (req, res, data) => {
  // get all data from db and send to client
  recommendations.RecommendationModel.find({})
    .then(() => {
      console.log('Controller Data: ', data);
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('CONTROLLER ERROR: ', err);
    });
};

module.exports = getAllData;