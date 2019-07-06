const PgCalls = require('../stores/pg/pgCalls');
const Scores = require('./scores');

jest.mock('../stores/pg/pgCalls');

describe('addCatScores', () => {
  test('should called updateScore function with correct parameters', async () => {
    PgCalls.updateScores = jest.fn(() => {});

    await Scores.addCatScores(
      { body: { catScores: [{ id: '1', isWin: true }] } },
      { send: () => {} }
    );
    expect(PgCalls.updateScores).toHaveBeenCalledWith('1', true);
  });
});
