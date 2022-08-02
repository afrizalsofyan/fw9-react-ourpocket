import {createAsyncThunk} from '@reduxjs/toolkit';
import http from '../../helpers/http';

import qs from 'qs';

export const historyTransaction = createAsyncThunk('transaction/history', async (param) => {
  const result = {};
  const setPage = param?.page;
  const keyword = param?.search;
  const searchBy = param.searchBy;
  const sortBy = param?.sortBy;
  const sortType = param?.sortType;
  console.log('setPage');
  console.log(setPage);
  const token = param?.token;
  try {
    const {data} = await http(token).get(`/transactions/getAllTransaction${setPage!==undefined?`?page=${setPage}`:''}${searchBy!==undefined?`&searchBy=${searchBy}`:''}${keyword!==undefined?`&search=${keyword}`:''}${sortBy!==undefined?`&sortBy=${sortBy}`:''}${sortType!==undefined?`&sortType=${sortType}`: ''}`);
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});