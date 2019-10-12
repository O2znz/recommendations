const mongoose = require('mongoose');
// const data = require('./dummy-data.json');

// mongoose.connect('mongodb://localhost/recommendations');

// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'Could not connect to DB!'));
// db.once('open', () => {
//   console.log('Connected to DB!');
// });

const recommendationSchema = mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  images: [String],
  price: String,
  type: String,
  rating: Number
});

const RecommendationModel = mongoose.model('Recommendation', recommendationSchema);

// var recommendation = {
//   id: 0,
//   name: 'Mi Casa',
//   location: 'No se',
//   images: ['url1', 'url2', 'url3'],
//   price: 'Mucho dinero',
//   type: 'Um cama',
//   rating: 5
// };

// RecommendationModel.insertMany(recommendation);
module.exports = {
  RecommendationModel: RecommendationModel,
  recommendationSchema: recommendationSchema
};