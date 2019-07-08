const { Pool } = require('pg');
const pool = new Pool({
  connectionString: process.env.DATABASE_URL + '?ssl=true',
});

const { fetchCats } = require('../cats');

const tables = [
  {
    name: 'scores',
    columns: [
      { name: 'cat_id', type: 'TEXT' },
      { name: 'win_match', type: 'INT' },
      { name: 'all_match', type: 'INT' },
    ],
  },
];

const deleteTables = async () => {
  try {
    await pool.query(`DROP TABLE ${tables.map(({ name }) => name).join()}`);
  } catch (e) {
    console.log('delete error:', e);
  }
};

const createTables = async () => {
  try {
    await Promise.all(
      tables.map(({ name, columns }) =>
        pool.query(
          `CREATE TABLE ${name} (${columns
            .map(({ name, type }) => `${name} ${type}`)
            .join(', ')})`
        )
      )
    );
  } catch (e) {
    console.log('createTable error:', e);
  }
};

const fillScoresTable = async () => {
  try {
    const allCats = await fetchCats();
    await Promise.all(
      allCats.map(({ id }) =>
        pool.query(
          `INSERT INTO scores (cat_id, win_match, all_match) VALUES ('${id}', 0, 0)`
        )
      )
    );
  } catch (e) {
    console.log('fillScores error', e);
  }
};

const initDb = async () => {
  await deleteTables();
  await createTables();
  await fillScoresTable();
};

initDb();
