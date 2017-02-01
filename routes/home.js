const router = require('express').Router();
const { getRandomImage } = require('../services/background');
const { findWeatherByCity } = require('../services/weather');
const { getQuote } = require('../services/quotes');
const icons = require('../weather-icons');

router.get('/', getRandomImage, findWeatherByCity, getQuote, (req, res) => {
  const icon = icons[res.weather.weather[0].main.toLowerCase()];
  res.render('index', {
    image: res.image,
    weather: res.weather,
    quote: res.quote,
    icon,
  });
});

module.exports = router;
