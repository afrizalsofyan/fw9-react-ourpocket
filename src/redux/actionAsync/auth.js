import { createAsyncThunk } from '@reduxjs/toolkit';
import qs from 'qs';
import {http} from '../../helpers/http';

export const login = createAsyncThunk('auth/login', async (request) => {
  const result = {};
  try {
    const send  = qs.stringify(request);
    const {data} = await http().post('/auth/login', send, {
      headers: {
        'content-type' : 'application/x-www-form-urlencoded'
      }
    });
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk('auth/register', async (request)=>{
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/register', send, {
      headers: {
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

export const createPin = createAsyncThunk('auth/register', async (request)=>{
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/auth/createPin', send, {
      headers: {
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