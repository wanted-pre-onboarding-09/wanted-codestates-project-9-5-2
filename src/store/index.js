import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
import starredSlice from './starred/starredSlice';
import userSlice from './user/userSlice';

const reducers = combineReducers({
  user: userSlice,
  starred: starredSlice,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});

export default store;
