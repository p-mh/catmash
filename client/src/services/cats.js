import axios from 'axios';

export const fetchTwoCats = async () => {
  try {
    const { data } = await axios.get('/cats?limit=2');
    return data;
  } catch (e) {
    console.log(e);
  }
};
