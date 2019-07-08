const PgCalls = require('../stores/pg/pgCalls');
const Scores = require('./scores');
const CatsStore = require('../stores/cats');

jest.mock('../stores/pg/pgCalls');
jest.mock('../stores/cats');

describe('addCatScores', () => {
  test('should called updateScore function with correct parameters', async () => {
    PgCalls.updateScores = jest.fn(() => {});

    await Scores.addCatScores(
      { body: { catScores: [{ id: '1', isWin: true }] } },
      { sendStatus: () => {} }
    );
    expect(PgCalls.updateScores).toHaveBeenCalledWith('1', true);
  });
});

describe('getCatsVotes', () => {
  test('should called req.send (sendSpy) with the correct result formated and ordered', async () => {
    PgCalls.getScores = jest.fn(() => ({
      rows: [
        { cat_id: '123', win_match: 1, all_match: 1 },
        { cat_id: '456', win_match: 1, all_match: 2 },
        { cat_id: '789', win_match: 0, all_match: 1 },
      ],
    }));
    CatsStore.fetchCats = jest.fn(() => [
      { id: '123', url: 'url' },
      { id: '456', url: 'url' },
      { id: '789', url: 'url' },
    ]);

    const sendSpy = jest.fn();
    const statusSpy = jest.fn(function() {
      return this;
    });

    await Scores.getCatsVotes({}, { send: sendSpy, status: statusSpy });
    expect(sendSpy).toHaveBeenCalledWith([
      { cat_id: '123', url: 'url', victoryPercent: 100, votes: 1 },
      { cat_id: '456', url: 'url', victoryPercent: 50, votes: 1 },
      { cat_id: '789', url: 'url', victoryPercent: 0, votes: 0 },
    ]);
  });

  test("should called req.send (sendSpy) with the correct result if the cat doesn't exist in the CatsStore", async () => {
    PgCalls.getScores = jest.fn(() => ({
      rows: [{ cat_id: '123', win_match: 1, all_match: 1 }],
    }));
    CatsStore.fetchCats = jest.fn(() => []);

    const sendSpy = jest.fn();
    const statusSpy = jest.fn(function() {
      return this;
    });

    await Scores.getCatsVotes({}, { send: sendSpy, status: statusSpy });
    expect(sendSpy).toHaveBeenCalledWith([]);
  });
});
