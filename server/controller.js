// controllers for requests to server
const Recommendation = require('../database/index.js');


const getAllData = (req, res, data) => {
  // get all data from db and send to client
  Recommendation.find({})
    .then(() => {
      res.status(200).send(data);
    })
    .catch((err) => {
      console.log('CONTROLLER ERROR: ', err);
    });
};

module.exports = getAllData;