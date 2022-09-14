import axios from 'axios';
import Cookies from 'js-cookie';
import { logout, saveNewToken } from '../redux/reducers/auth';
import { saveErrorMsg, saveErrorMsgUpdate } from '../redux/reducers/user';
import { store as str } from '../redux/store';

export const http = () => {
  const headers = {};
  const token = Cookies.get('token');
  
  if(token) {
    headers.authorization = `Bearer ${token}`;
  }
  const instance = axios.create({
    headers,
    baseURL: process.env.REACT_APP_BACKEND_BASE_URL
  });

  instance.interceptors.request.use(
    config => {
      // console.log(config);
      // config.headers = { 
      //   'Authorization': `Bearer ${token}`,
      //   'Accept': 'application/json',
      //   'Content-Type': 'application/x-www-form-urlencoded'
      // };
      return config;
    },
    err => {
      // console.log(err);
      return Promise.reject(err);
    }
  );

  instance.interceptors.response.use(
    response => {
      return response;
    },
    err => {
      // console.log(err);
      if(err.response.status === 400 && err.config.url.includes('/user/allUser?') || err.config.url.includes('search') || err.config.url.includes('sort') || err.config.url.includes('page')) {
        str.dispatch(saveErrorMsg(err.response.data.message));
      }
      if(err.response.status === 400 && err.config.url.includes('user/changePassword')) {
        str.dispatch(saveErrorMsgUpdate(err.response.data.message));
      }
      if(err.response.status === 400 && err.config.url.includes('user/changePin')) {
        str.dispatch(saveErrorMsgUpdate(err.response.data.message));
      }
      if(err.response.status === 400 && err.config.url.includes('profile')) {
        str.dispatch(saveErrorMsgUpdate(err.response.data.message));
      }
      if(err.response.status === 400 && err.config.url.includes('profile/photo')) {
        str.dispatch(saveErrorMsgUpdate(err.response.data.message));
      }
      if(err.response.status === 401) {
        str.dispatch(saveNewToken(Cookies.get('refreshToken')));
        //sebelum pakai persist
        const refreshToken = Cookies.get('refreshToken');
        if(refreshToken){
          Cookies.set('token', Cookies.get('refreshToken'));
        }
        // axios.defaults.headers.common['Authorization'] = 'Bearer ' + refreshToken;
        // if(refreshToken) {
        // } else {
        //   str.dispatch(logout(()=>window.location.href='/auth/login'));
        // }
      }
      return Promise.reject(err);
    }
  );
  return instance;
};
