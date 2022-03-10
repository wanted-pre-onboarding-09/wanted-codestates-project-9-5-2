import { createSlice } from '@reduxjs/toolkit';
import { getUser } from './userAsyncThunk';

const initialState = {
  userLoading: false,
  userError: false,
  avartar: null,
  nickname: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.pending, (state) => {
      state.userLoading = true;
      state.userError = false;
      state.avartar = null;
    });
    builder.addCase(getUser.rejected, (state) => {
      state.userLoading = false;
      state.userError = true;
    });
    builder.addCase(getUser.fulfilled, (state, { payload: data }) => {
      state.avartar = data.data.avatar_url;
      state.nickname = data.data.name;
    });
  },
});

export default userSlice.reducer;
