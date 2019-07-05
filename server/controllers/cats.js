const catStore = require('../stores/cats');

const isThereSameNumber = array => {
  const nbNumber = array.reduce((result, value) => {
    return result[value]
      ? { ...result, [value]: result[value] + 1 }
      : { ...result, [value]: 1 };
  }, {});
  return !!Object.values(nbNumber).find(n => n >= 2);
};

const getRandomNumbers = (arrayLength, limit) => {
  const result = new Array(Number(limit))
    .fill(null)
    .map(() => Math.floor(Math.random() * (arrayLength - 1)));

  if (isThereSameNumber(result)) {
    return getRandomNumbers(arrayLength, limit);
  }
  return result;
};

const getCats = async (req, res) => {
  try {
    const { limit } = req.query;
    const allCats = await catStore.fetchCats();
    const randomCats = getRandomNumbers(allCats.length, limit).map(
      n => allCats[n]
    );
    res.send(randomCats);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getCats, isThereSameNumber, getRandomNumbers };
