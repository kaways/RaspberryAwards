import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './ducks/loading';

export default configureStore({
  reducer: {
    loading: loadingReducer,
  },
});
