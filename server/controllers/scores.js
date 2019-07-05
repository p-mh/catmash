const PgCalls = require('../stores/pg/pgCalls');

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

module.exports = { addCatScores };
