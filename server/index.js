// require express and bodyParser
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
// const mongoose = require('mongoose');
const recommendations = require('../database/index.js');
// const data = require('../database/dummy-data.json');
const controller = require('./controller.js');
// const faker = require('faker');

// example of how faker works
// var firstName = faker.image.imageUrl();
// console.log(firstName);

// mongoose.connect('mongodb://localhost/recommendatinos');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Could not connect to DB!'));
// db.once('open', () => {
//   console.log('Connected to DB!');
// });

const app = express();

const PORT = 3004;

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../client/dist/')));

// put callback to get req in controller folder
// app.get('/api/recommendations', (req, res) => {
//   res.status(200).send(data);
// });

console.log('LOG BEFORE API GET REQUEST');

app.get('/api/recommendations', (req, res, data) => {
  recommendations.RecommendationModel.find({})
    .then(controller.getAllData);
  // res.status(200).send(data);
  // controller.getAllData;
});


app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});