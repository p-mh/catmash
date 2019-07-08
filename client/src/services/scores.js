import axios from 'axios';

export const updateScores = async catScores => {
  try {
    await axios.post('/scores', { catScores });
  } catch (e) {
    console.log(e);
  }
};

export const getScores = async () => {
  try {
    const { data } = await axios.get('/scores');
    return data;
  } catch (e) {
    console.log(e);
  }
};
