import { createSlice } from '@reduxjs/toolkit';
import { getStarred } from './starredAsyncThunk';

const initialState = {
  starredLoading: false,
  starredError: false,
  starredData: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder.addCase(getStarred.pending, (state) => {
      state.starredLoading = true;
      state.starredError = false;
      state.starredData = null;
    });
    builder.addCase(getStarred.rejected, (state) => {
      state.starredLoading = false;
      state.starredError = true;
    });
    builder.addCase(getStarred.fulfilled, (state, { payload: data }) => {
      state.starredData = data.data.map((repo) => {
        return {
          owner: repo.owner,
          url: repo.url,
        };
      });
    });
  },
});

export default userSlice.reducer;
