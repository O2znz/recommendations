// import mongoose
const mongoose = require('mongoose');

// define recommendation schema
const recommendationSchema = mongoose.Schema({
  id: Number,
  name: String,
  location: String,
  images: [String],
  price: String,
  type: String,
  rating: Number
});

// initialise recommendation model
const RecommendationModel = mongoose.model('Recommendation', recommendationSchema);

// create recommendation object
// var recommendation = {
//   id: 0,
//   name: 'Mi Casa',
//   location: 'No se',
//   images: ['url1', 'url2', 'url3'],
//   price: 'Mucho dinero',
//   type: 'Um cama',
//   rating: 5
// };

// insert recommendation object into database
// RecommendationModel.insertMany(recommendation);

// export model and schema
module.exports = {
  Recommendation: RecommendationModel,
  recommendationSchema: recommendationSchema
};