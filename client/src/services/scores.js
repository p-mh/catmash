import axios from 'axios';

export const updateScores = async catScores => {
  try {
    await axios.post('/scores', { catScores });
  } catch (e) {
    console.log(e);
  }
};
