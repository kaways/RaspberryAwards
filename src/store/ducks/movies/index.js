import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  list: [],
  totalElements: '',
  multipleWinnersList: [],
  topStudiosList: [],
  producersIntervalMin: [],
  producersIntervalMax: [],
  winnerByYear: [],
};

export const setAllMovies = createAction('SET_ALL_MOVIES');
export const setMoviesMultiples = createAction('SET_MOVIES_MULTIPLES_WINNERS');
export const setMoviesTopStudios = createAction('SET_MOVIES_TOP_STUDIOS');
export const setProducersInterval = createAction('SET_PRODUCERS_INTERVAL');
export const setWinnerByYear = createAction('SET_WINNER_BY_YEAR');

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(setAllMovies, (state, action) => {
      state.list = action.payload.content
      state.totalElements = action.payload.size
    })
    .addCase(setMoviesMultiples, (state, action) => {
      state.multipleWinnersList = action.payload
    })
    .addCase(setMoviesTopStudios, (state, action) => {
      state.topStudiosList = action.payload
    })
    .addCase(setProducersInterval, (state, action) => {
      state.producersIntervalMin = action.payload.min
      state.producersIntervalMax = action.payload.max
    })
    .addCase(setWinnerByYear, (state, action) => {
      state.winnerByYear = action.payload
    })
});
