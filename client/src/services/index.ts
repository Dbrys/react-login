import axios from 'axios';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;

export const registerUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};

export const getUser = async () => {
  try {
    const res = await axios.get(`${BASE_URL}`);
    return res;
  } catch (e) {
    console.error(e);
    return e;
  }
};
