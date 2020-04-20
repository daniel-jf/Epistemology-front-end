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

 const update = (user, payload) => {
  console.log(user, payload)
  let request = axios.put(endpoint+'/users/'+user._id, payload);
  return request;
}
 const show = (id) => {
  return axios.get(endpoint+'/users/'+id);
}
export default {
  register,
  login,
  update
}