import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const getStarred = createAsyncThunk(
  'starred/get',
  async ({ userId }) => {
    return axios({
      method: 'get',
      url: `https://api.github.com/users/${userId}/starred?per_page=100
    `,
      headers: { Authorization: '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' },
    });
  },
);
