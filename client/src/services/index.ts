import axios from 'axios';

const { REACT_APP_BASE_URL: BASE_URL } = process.env;

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export const registerUser = async (userInfo: User) => {
  try {
    const res = await axios.post(`${BASE_URL}/register_user`, userInfo);
    if (res.status === 200) {
      console.log(res.data);
      return true;
    }
    return res;
  } catch (e) {
    console.error(e);
    return false;
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
