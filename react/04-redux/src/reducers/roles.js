import { FETCH_ROLES_SUCCESS } from '../actions/types';

const initialState = {
  list: [],
  isFetched: false,
};

const roles = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ROLES_SUCCESS:
      return {
        list: payload,
        isFetched: true,
      };
    default:
      return state;
  }
};

export default roles;
