const request = require('request');
// const fs = require('fs');

const fetchBreedDescription = (breed, callback) => {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, 'utf-8', (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      const data = JSON.parse(body)[0];
     !data ?
      callback(null, 'Kitten not found! pls enter real kitten! uwu') :
        callback(null, `Description of precious, soft ${breed} kitties: ${data.description}`);
    }
  });
}



module.exports = fetchBreedDescription;