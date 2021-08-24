import {
  FETCH_USERS_SUCCESS,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
} from '../actions/types';

const initialState = {
  list: [],
  isFetched: false,
};

const users = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        list: payload,
        isFetched: true,
      };
    case FETCH_USER_SUCCESS:
      return {
        ...state,
        list: state.isFetched ? state.list : [payload],
      };
    case CREATE_USER_SUCCESS:
      return {
        ...state,
        list: [...state.list, payload],
      };
    case EDIT_USER_SUCCESS:
      return {
        ...state,
        list: state.list.map(user => (user.id === payload.id ? payload : user)),
      };
    default:
      return state;
  }
};

export default users;
