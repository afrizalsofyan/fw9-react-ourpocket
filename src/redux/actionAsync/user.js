import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';


export const getAllUser = createAsyncThunk('/user/getAllUser', async (token) => {
  const result = {};
  try {
    const{data} = await http(token).get('/user/allUser');
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});


export const getUser = createAsyncThunk('/user/getUser', async (request) => {
  const result = {};
  try {
    const token = request.token;
    const id = request.id;
    const {data} = await http(token).get('/user/getUser/'+id);
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});