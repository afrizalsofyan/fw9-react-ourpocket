import axios  from 'axios';
const API_URL = 'http://localhost:3335';

const register = (username, email, password) => {
  return axios.post(API_URL + '/auth/register', {
    username, email, password
  });
};
const login = (email, password) => {
  return axios.post(API_URL + '/auth/login', {
    email, password
  }).then((res)=>{
    if(res.result.token){
      localStorage.setItem('userToken', JSON.stringify(res.result));
    }
    return res.result;
  });
};

const logout = () => {
  localStorage.removeItem('userToken');
};
const authService = {register, login, logout};
export default authService;