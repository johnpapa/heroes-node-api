const cors = require('cors');

const whitelist = [
  'https://papa-heroes-angular.azurewebsites.net',
  'https://papa-heroes-react.azurewebsites.net',
  'https://papa-heroes-vue.azurewebsites.net',
  'http://localhost:9626',
  'http://localhost:8626',
  'http://localhost:7626',
  'http://localhost:3000',
  'http://localhost:8080',
];

const corsOptions = {
  origin:  function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

module.exports = {
  cors,
  corsOptions
};

