import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  isFetched: false,
};

const postsSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    getUsers(state, action) {
      return {
        list: action.payload,
        isFetched: true,
      };
    },
    getUser(state, action) {
      state.list = state.isFetched ? state.list : [action.payload];
    },
    createUser(state, action) {
      state.list.push(action.payload);
    },
    editUser(state, action) {
      state.list = state.list.map(user => (user.id === action.payload.id ? action.payload : user));
    },
  },
});

export const { actions, reducer } = postsSlice;
