const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL + '?ssl=true',
});

const updateScores = async (cat_id, isWin) => {
  if (isWin) {
    pool.query(
      `UPDATE scores SET all_match = all_match+1, win_match = win_match+1 WHERE cat_id = '${cat_id}'`
    );
  } else {
    pool.query(
      `UPDATE scores SET all_match = all_match+1 WHERE cat_id = '${cat_id}'`
    );
  }
};

module.exports = { updateScores };
