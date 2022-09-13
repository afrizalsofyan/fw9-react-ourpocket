import { createAsyncThunk } from '@reduxjs/toolkit';
import { http } from '../../helpers/http';

export const getAllNotification = createAsyncThunk('notification/getAllNotRead', async () => {
  const result = {};
  try {
    const {data} = await http().get('/notification/reading');
    return data;
  } catch (error) {
    result.errorMsg = error.response.data.message;
    return result;
  }
});

export const updateNotification = createAsyncThunk(
  'notification/update',
  async request => {
    const result = {};
    try {
      const {data} = await http().patch('notification/' + request.id);
      return data;
    } catch (error) {
      result.errorMsg = error.response.data.message;
      return result;
    }
  },
);
