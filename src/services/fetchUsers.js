import axios from 'axios';

axios.defaults.baseURL = 'https://64465da50431e885f00ffc0b.mockapi.io/tweets';

export const getAllUsers = async () => {
  const { data } = await axios.get(`/users`);
  return data;
};

export const updateUserFollowers = async (id, followers) => {
  const res = await axios.put(`/users/${id}`, followers);
  return res;
};
export const getUsers = async page => {
  const { data } = await axios.get(`/users?page=${page}&limit=4`);
  return data;
};
