import { createSlice } from '@reduxjs/toolkit';

const initialState = 0;

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    incrementRequestCount(state) {
      return state + 1;
    },
    decrementRequestCount(state) {
      return state - 1;
    },
  },
});

export const { incrementRequestCount, decrementRequestCount } = loadingSlice.actions;

export const { reducer } = loadingSlice;
