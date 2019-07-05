const { getCats } = require('../controllers/cats');

module.exports = app => {
  app.get('/cats', getCats);
};
