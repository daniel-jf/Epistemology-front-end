import axios from 'axios';

const endpoint = 'http://localhost:4000/api/v1';

 const register = (payload) => {
  console.log(payload)
  return axios.post(`${endpoint}/register`, payload)
    .then(res => res);
}

const login = (user) => {
  return axios.post(`${endpoint}/login`, user)
    .then(res => res);
}

const update = (user) => {
  let request = axios.put(`${endpoint}/${user._id}`, user);
  return request
}

export default {
  register,
  login,
  update
}