var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/recommendations');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'Could not connect to DB!'));
db.once('open', () => {
  console.log('Connected to DB!');
});

// var recommendationSchema = mongoose.Schema({});

// var RecommendationModel = mongoose.model('Recommendation', recommendationSchema);