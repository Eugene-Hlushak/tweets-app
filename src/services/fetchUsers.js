import axios from 'axios';

axios.defaults.baseURL = 'https://64465da50431e885f00ffc0b.mockapi.io/tweets';

export const getUsers = async () => {
  const { data } = await axios.get('/users');
  return data;
};

export const updateUserFollowers = async (id, followers) => {
  const res = await axios.put(`/users/${id}`, followers);
  console.log(res.status);
  return res;
};
