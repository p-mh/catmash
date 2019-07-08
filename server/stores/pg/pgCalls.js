const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL + '?ssl=true',
});

const updateScores = async (cat_id, isWin) => {
  try {
    if (isWin) {
      pool.query(
        `UPDATE scores SET all_match = all_match+1, win_match = win_match+1 WHERE cat_id = '${cat_id}'`
      );
    } else {
      pool.query(
        `UPDATE scores SET all_match = all_match+1 WHERE cat_id = '${cat_id}'`
      );
    }
  } catch (e) {
    console.log(e);
  }
};

const getScores = async () => {
  try {
    const result = pool.query('SELECT * FROM scores');
    return result;
  } catch (e) {
    console.log(e);
  }
};

module.exports = { updateScores, getScores };
