// seed database with dummy data
const mongoose = require('mongoose');
const database = require('./index.js');
const data = require('./dummy-data.json');

console.log('Imported Data: ', data);

const seedDb = (data, callback) => {
  // drop database if exists
  // insert recommendations w/ insertMany
  // console.log message if inserted correctly
  database.RecommendationModel.insertMany(data, (err, data) => {
    if (err) {
      console.log('SEEDING ERROR: ', err);
      callback(err);
    } else {
      console.log('SEEDED DATA: ', data);
      callback(null, data);
    }
  });
};

mongoose.connect('mongodb://localhost/recommendations');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to DB!'));
db.once('open', () => {
  console.log('Connected to DB!');
  seedDb(data, () => {
    console.log('Database seeded!');
  });
});