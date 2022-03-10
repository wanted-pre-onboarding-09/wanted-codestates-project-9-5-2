import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/get', async ({ userId }) => {
  return axios({
    method: 'get',
    url: `https://api.github.com/users/${userId}`,
  });
});
