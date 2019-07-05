const axios = require('axios');
const URL = 'https://latelier.co/data/cats.json';

const fetchCats = async () => {
  try {
    const {
      data: { images },
    } = await axios.get(URL);
    return images;
  } catch (error) {
    console.log(error);
  }
};

module.exports = { fetchCats, URL };
