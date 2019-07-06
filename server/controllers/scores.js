const PgCalls = require('../stores/pg/pgCalls');
const catStore = require('../stores/cats');

const addCatScores = async (req, res) => {
  try {
    const { catScores } = req.body;

    await Promise.all(
      catScores.map(({ id, isWin }) => {
        if (id && isWin) {
          PgCalls.updateScores(id, isWin);
        }
      })
    );
    res.sendStatus(201);
  } catch (e) {
    console.log(e);
  }
};

const getCatsVotes = async (req, res) => {
  try {
    const { rows } = await PgCalls.getScores();
    const allCats = await catStore.fetchCats();

    const catsWithUrl = rows
      .map(({ cat_id, win_match, all_match }) => {
        const { url } = allCats.find(({ id }) => id === cat_id) || {
          url: null,
        };
        const victoryPercent =
          Math.round(((win_match * 100) / all_match) * 100) / 100;
        return {
          cat_id,
          victoryPercent: victoryPercent || 0,
          votes: win_match,
          url,
        };
      })
      .filter(({ url }) => url);

    const sortedCats = catsWithUrl.sort(
      (
        { victoryPercent: victoryPercentA, votes: votesA },
        { victoryPercent: victoryPercentB, votes: votesB }
      ) => {
        if (victoryPercentA === victoryPercentB) {
          return votesB - votesA;
        }
        return victoryPercentB - victoryPercentA;
      }
    );
    res.status(200).send(sortedCats);
  } catch (e) {
    console.log(e);
    res.status(500);
  }
};

module.exports = { addCatScores, getCatsVotes };
