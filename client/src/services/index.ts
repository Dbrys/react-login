import axios from 'axios';

const registerUser = async () => {
  const url = 'http://localhost:8080/';
  const res = await axios.get(url);
  console.log(res.data);
  return res;
};

export default registerUser;
