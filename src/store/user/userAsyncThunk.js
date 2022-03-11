import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getUser = createAsyncThunk('user/get', async ({ userId }) => {
  return axios({
    method: 'get',
    url: `https://api.github.com/users/${userId}`,
    headers: { Authorization: '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' },
  });
});
