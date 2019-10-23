// require express and bodyParser and cors
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router');
const cors = require('cors');
// const faker = require('faker');

// example of how faker works
// var firstName = faker.image.imageUrl();
// console.log(firstName);

// initialise express
const app = express();

const PORT = 3004;

// use cors middleware
app.use(cors());

// use bodyParser to handle requests
app.use(bodyParser.json());

// serve static files to browser upon request
app.use(express.static(path.join(__dirname, '../client/dist/')));

// send test response to get req from server
app.get('/greeting', (req, res) => {
  res.status(200).send('Hello from the server!');
});

// route all reqs for data to router file
app.use('/api', router);

// launch app to listen to specified port
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}!`);
});