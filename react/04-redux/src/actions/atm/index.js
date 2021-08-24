import { DEPOSIT, WITHDRAW } from '../types';
import { wait } from '../../api/utils';

export const deposit = payload => ({
  type: DEPOSIT,
  payload,
});

export const withdraw = payload => ({
  type: WITHDRAW,
  payload,
});

/***************************************************************/

export const depositAsync = payload => async dispatch => {
  await wait();

  dispatch(deposit(payload));
};

const checkBalance = async (getState, withdrawAmount) => {
  await wait(2000);

  const state = getState();
  const balance = state.atm;

  if (balance >= withdrawAmount) {
    return true;
  } else {
    throw new Error('Not enough money in the account');
  }
};

export const withdrawAsync = payload => async (dispatch, getState) => {
  try {
    await checkBalance(getState, payload);

    dispatch(withdraw(payload));
  } catch (err) {
    console.warn(err.message);
  }
};
