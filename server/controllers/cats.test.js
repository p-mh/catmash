const CatsStore = require('../stores/cats');
const { isThereSameNumber, getRandomNumbers, getCats } = require('./cats');

jest.mock('../stores/cats');

describe('isThereSameNumber', () => {
  test('should return false if numbers are different', () => {
    expect(isThereSameNumber([1, 2])).toBeFalsy();
  });
  test('should return true if numbers are same', () => {
    expect(isThereSameNumber([1, 1])).toBeTruthy();
  });
});

describe('getRandomNumbers', () => {
  beforeEach(() => {
    MathRandomSpy = jest.spyOn(Math, 'random');
    MathRandomSpy.mockReturnValueOnce(0.3);
    MathRandomSpy.mockReturnValueOnce(0.3);
    MathRandomSpy.mockReturnValueOnce(0.3);
    MathRandomSpy.mockReturnValueOnce(1);
  });

  test('should return return [0, 1]', () => {
    expect(getRandomNumbers(2, 2)).toEqual([0, 1]);
  });
  test('should called Math.random (MathRandomSpy) four times', () => {
    expect(MathRandomSpy).toHaveBeenCalledTimes(4);
  });
});

describe('getCats', () => {
  beforeEach(() => {
    CatsStore.fetchCats = jest.fn(() => Promise.resolve(['cat', 'cat2']));
    Math.random = jest.fn();
    Math.random.mockReturnValueOnce(1);
    Math.random.mockReturnValueOnce(0.3);
  });

  const sendSpy = jest.fn();

  test('should called req.send (sendSpy)', async () => {
    await getCats({ query: { limit: 2 } }, { send: sendSpy });
    expect(sendSpy).toHaveBeenCalled();
  });
  test('should send (sendSpy) ["cat2", "cat"]', async () => {
    await getCats({ query: { limit: 2 } }, { send: sendSpy });
    expect(sendSpy).toHaveBeenCalledWith(['cat2', 'cat']);
  });
});
