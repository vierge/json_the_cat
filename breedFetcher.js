const request = require('request');
// const fs = require('fs');
const args = process.argv.slice(2);


const fetchBreed = (breed) => {
  breed = args;
  console.log(`fetching from http://https://api.thecatapi.com/v1/breeds/search?q=${breed}`);
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, 'utf-8', (err, response, body) => {
    if (err) return console.log('ERROR! Details below... \n' + err);
    
    const data = JSON.parse(body);
    
    return !data[0] ?
      console.log('Kitten not found! pls enter real kitten! uwu') :
      console.log(`Description of precious, soft ${breed} kitties: ${data[0].description}`);
  });
};

fetchBreed(args);