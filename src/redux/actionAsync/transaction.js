import {createAsyncThunk} from '@reduxjs/toolkit';
import {http} from '../../helpers/http';

import qs from 'qs';

export const historyTransaction = createAsyncThunk('transaction/history', async (param) => {
  const result = {};
  const setPage = param?.page;
  const keyword = param?.search;
  const searchBy = param.searchBy;
  const sortBy = param?.sortBy;
  const sortType = param?.sortType;
  const token = param?.token;
  try {
    const {data} = await http(token).get(`/transactions/getAllTransaction${setPage!==undefined?`?page=${setPage}`:''}${searchBy!==undefined?`&searchBy=${searchBy}`:''}${keyword!==undefined?`&search=${keyword}`:''}${sortBy!==undefined?`&sortBy=${sortBy}`:''}${sortType!==undefined?`&sortType=${sortType}`: ''}`);
    return data;
  } catch (error) {
    result.message = error.response.data?.message;
    return result;
  }
});

export const getSomeTransaction = createAsyncThunk(
  'transfer/getSomeTransaction',
  async request => {
    const result = {};
    try {
      const {data} = await http().get('/transactions/getAllTransaction?sortBy=time_transaction&sortType=1&limit=4&page=1');
      return data;
    } catch (error) {
      console.log(error);
      result.errorMsg = error.response.data.message;
      return result;
    }
  },
);

export const transferAmountTransaction = createAsyncThunk('transaction/transfer', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().post('/transactions/transfer', send);
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const topupBalanceTransaction = createAsyncThunk('transaction/topup', async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const {data} = await http().patch('/transactions/topup', send);
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});