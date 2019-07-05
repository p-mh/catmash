const { getCats } = require('../controllers/cats');
const { addCatScores } = require('../controllers/scores');

module.exports = app => {
  app.get('/cats', getCats);
  app.post('/scores', addCatScores);
};
