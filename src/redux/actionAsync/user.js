import { createAsyncThunk } from '@reduxjs/toolkit';
import {http} from '../../helpers/http';
import qs from 'qs';


export const getAllUser = createAsyncThunk('/user/getAllUser', async (request) => {
  const result = {};
  try {
    const{data} = await http().get(`/user/allUser?search=${request.keywords}&sortBy=username&sortType=${request.sortType}&limit=${request.limit}&page=${request.page}`);
    return data;
  } catch (error) {
    console.log(error);
    result.message = error.response.data.message;
    return result;
  }
});


export const getUser = createAsyncThunk('/user/getUser', async (request) => {
  const result = {};
  try {
    const {data} = await http().get('/user/getUser/'+request.id);
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});

export const getProfileCurrentUser = createAsyncThunk('profile/currentUserProfile', async () =>{
  const result = {};
  try {
    const {data} = await http().get('/user/currentUser');
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const updatePhoneNumberUser = createAsyncThunk('profile/updatePhoneNumber', async (request)=>{
  const result = {};
  try {
    const send = qs.stringify(request);

    const {data} = await http().post('/profile/phone', send, {
      header: {
        'content-type' : 'application/x-www-form-urlencoded'
      }
    });
    result.successMsg = data.message;
    return result;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const changePasswordUser = createAsyncThunk('profile/changePasswordUser', async (request)=>{
  const result = {};
  try {
    const send = qs.stringify(request);
    console.log(send);
    const {data} = await http().patch('/user/changePassword', send, {
      header: {
        'content-type' : 'application/x-www-form-urlencoded'
      }
    });
    result.successMsg = data.message;
    return result;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const changePinUser = createAsyncThunk('/profile/changePin', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().patch('/user/changePin', send, {
      header: {
        'content-type' : 'application/x-www-form-urlencoded'
      }
    });
    result.successMsg = data.message;
    return result;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const updateProfileUser = createAsyncThunk(
  'profile/updateProfileUser',
  async request => {
    const result = {};
    try {
      const send = new FormData();
      send.append('firstName', request.firstName);
      send.append('lastName', request.lastName);
      if (request.picture) {
        send.append('picture', request.picture);
      }
      const {data} = await http().patch('/profile', send, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      result.successMsg = data.message;
      return result;
    } catch (error) {
      result.errorMsg = error.response.data.message;
      return result;
    }
  },
);

export const deletePhoto = createAsyncThunk(
  'profile/deletePhoto',
  async () => {
    const result = {};
    try {
      const {data} = await http().delete('/profile/photo');
      result.successMsg = data.message;
      return result;
    } catch (error) {
      result.errorMsg = error.response.data.message;
      return result;
    }
  },
);