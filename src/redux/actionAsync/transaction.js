import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

import qs from 'qs';

export const historyTransaction = createAsyncThunk('transaction/history', async (param) => {
  const result = {};
  const setPage = param?.page;
  console.log('setPage');
  console.log(setPage);
  const token = param?.token;
  try {
    const {data} = await http(token).get(`/transactions/getAllTransaction${setPage!==undefined?`?page=${setPage}`:''}`);
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});