import { DEPOSIT, WITHDRAW } from '../actions/types';

const initialState = 0;

const atm = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case DEPOSIT:
      return state + payload;
    case WITHDRAW:
      return state - payload;
    default:
      return state;
  }
};

export default atm;
