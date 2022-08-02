import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';
import qs from 'qs';


export const getAllUser = createAsyncThunk('/user/getAllUser', async (token) => {
  const result = {};
  try {
    const{ data} = await http(token).get('/user/allUser');
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});