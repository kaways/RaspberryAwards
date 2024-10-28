import { configureStore } from '@reduxjs/toolkit';
import loadingReducer from './ducks/loading';
import moviesReducer from './ducks/movies';

export default configureStore({
  reducer: {
    loading: loadingReducer,
    movies: moviesReducer,
  },
});
