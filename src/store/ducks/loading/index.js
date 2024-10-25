import { createAction, createReducer } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  status: true,
};

export const startLoading = createAction('START_LOADING');
export const endLoading = createAction('END_LOADING');

export default createReducer(INITIAL_STATE, (builder) => {
  builder
    .addCase(startLoading, (state, action) => {
      state.status = action.payload
    })
    .addCase(endLoading.type, (state, action) => {
      state.status = action.payload
    })
});
