import { createAsyncThunk } from '@reduxjs/toolkit';
import http from '../../helpers/http';

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