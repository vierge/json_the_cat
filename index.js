const fetchBreed  = require('./breedFetcher');

const args = process.argv.slice(2);

fetchBreed(args, (error, cat) => {
  return error ? console.log('Error fetch details:', error) :
    console.log(cat);
});