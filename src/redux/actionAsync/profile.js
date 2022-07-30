import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getProfile = createAsyncThunk('profile/getProfile', async()=>{
  const result = await axios.get('http://localhost:3335/profile', {headers: {authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ODQsImVtYWlsIjoidXNlcmJhcnVAbWFpbC5jb20iLCJ1c2VybmFtZSI6InVzZXIgYmFydSIsImlhdCI6MTY1OTE3Njc3NywiZXhwIjoxNjU5MjYzMTc3fQ.juTi34JGx6KA_CXveYfgJOCDmBmTBGpDF0_hA8l4Gvk'}});
  return result;
});