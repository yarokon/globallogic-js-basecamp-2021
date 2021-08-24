import { INCREMENT_REQUESTS_COUNT, DECREMENT_REQUESTS_COUNT } from '../actions/types';

const initialState = 0;

const loading = (state = initialState, action) => {
  const { type } = action;

  switch (type) {
    case INCREMENT_REQUESTS_COUNT:
      return state + 1;
    case DECREMENT_REQUESTS_COUNT:
      return state - 1;
    default:
      return state;
  }
};

export default loading;
