const { getCats } = require('../controllers/cats');
const { addCatScores, getCatsVotes } = require('../controllers/scores');

module.exports = app => {
  app.get('/cats', getCats);
  app.post('/scores', addCatScores);
  app.get('/scores', getCatsVotes);
};
