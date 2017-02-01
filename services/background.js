const fetch = require('node-fetch');

const APP_ID = process.env.MOMENTUM_APP_ID
const APP_SECRET = process.env.MOMENTUM_APP_SECRET;

function getRandomImage(req, res, next) {
  fetch(`https://api.unsplash.com/photos/random/?client_id=${APP_ID}`)
  .then(r => r.json())
  .then(result => {
    res.image = result;
    next();
  })
  .catch(err => {
    console.log('Error ', err);
    next();
  })
}

module.exports = { getRandomImage };
