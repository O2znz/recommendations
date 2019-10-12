// generate fake data and write it to file
const faker = require('faker');
const fs = require('fs');
const path = require('path');

// store path of json file to write in variable
const dataPath = path.join(__dirname, '/dummy-data.json');

// generate fake user obj
// push each fake user obj to users array
// write users array to dummy-data.json

// fake recommendation object
/*
** 'id': i,
** 'name': faker.lorem.word(),
** 'location': faker.address.city(),
** 'images': [faker.image.imageUrl()],
** 'price': faker.commerce.price(),
** 'type': faker.random.word(),
** 'rating': faker.random.number()
*/

var generateRecommendations = () => {
  let recommendations = [];

  for (var i = 0; i < 100; i++) {

    // generate fake recommendation
    let name = faker.lorem.word();
    let location = faker.address.city();
    let images = faker.image.imageUrl();
    let price = faker.commerce.price();
    let type = faker.random.word();
    let rating = faker.random.number();

    // create and push recommendation into recommendations array
    recommendations.push({
      'id': i,
      'name': name,
      'location': location,
      'images': images,
      'price': price,
      'type': type,
      'rating': rating
    });
  }

  return recommendations;
};

let data = generateRecommendations();

let jsonData = JSON.stringify(data, null, 2);

console.log('USERS OBJECT: ', jsonData);

fs.writeFile(dataPath, jsonData, 'utf8', (err) => {
  if (err) {
    console.log('UH-OH: ', err);
  } else {
    console.log('Data written to file!');
  }
});