import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';

export const getProfile = createAsyncThunk('profile/getProfile', async(token)=>{
  const result = {};
  try {
    const {data} = await http(token).get('/user/currentUser');
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
  // const {data} = await axios.get('http://localhost:3335/user/currentUser', {headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQsImVtYWlsIjoidXNlcmJhcnVAbWFpbC5jb20iLCJ1c2VybmFtZSI6InVzZXIgYmFydSIsImlhdCI6MTY1OTE3Njc3NywiZXhwIjoxNjU5MjYzMTc3fQ.juTi34JGx6KA_CXveYfgJOCDmBmTBGpDF0_hA8l4Gvk'}});
  // return data;
});

export const updateProfile = createAsyncThunk('/profile/updateProfile', async(request)=>{
  const result = {};
  try {
    const token = request.token;
    // const dataReq = {firstName: request.firstName, lastName: request.lastName, phonwNumber: request.phonwNumber};
    // const send = qs.stringify(dataReq);
    const formData = new FormData();
    formData.append('firstName', request.firstName);
    formData.append('lastName', request.lastName);
    formData.append('phoneNumber', request.phoneNumber);
    const {data} = await http(token).patch('/profile', formData, {
      headers: {
        'content-type' : 'multipart/form-data'
      }
    });
    // result.successMsg = data.message;
    // result = data
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const changePassword = createAsyncThunk('/profile/changePassword', async (request)=>{
  const result = {};
  try {
    const token = request.token;
    const dataReq = {currentPassword: request.currentPassword, newPassword: request.newPassword, repeatPassword: request.repeatPassword};
    const send = qs.stringify(dataReq);
    console.log(send);
    const {data} = await http(token).patch('/user/changePassword', send, {
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

export const changePin = createAsyncThunk('/profile/changePin', async (request) => {
  const result = {};
  try {
    const token = request.token;
    const dataReq = {newPin: request.newPin, currentPin: request.currentPin};
    const send = qs.stringify(dataReq);
    const {data} = await http(token).patch('/user/changePin', send, {
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

export const addPhoneNumber = createAsyncThunk('/profile/addPhoneNumber', async (request)=>{
  const result = {};
  try {
    const token = request.token;
    const dataReq = {phoneNumber: request.phoneNumber};
    const send = qs.stringify(dataReq);

    const {data} = await http(token).post('/profile/phone', send, {
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