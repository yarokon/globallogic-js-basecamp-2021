import { createSlice } from '@reduxjs/toolkit';

import { getRoles } from './thunks';

const initialState = {
  list: [],
  status: 'idle',
};

const rolesSlice = createSlice({
  name: 'roles',
  initialState,
  extraReducers: {
    [getRoles.pending]: state => {
      state.status = 'loading';
    },
    [getRoles.fulfilled]: (state, action) => ({
      list: action.payload,
      status: 'succeeded',
    }),
    [getRoles.rejected]: state => {
      state.status = 'failed';
    },
  },
});

export const { reducer } = rolesSlice;
