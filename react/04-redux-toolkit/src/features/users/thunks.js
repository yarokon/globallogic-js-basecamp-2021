import usersApi from '../../api/usersApi';
import { incrementRequestCount, decrementRequestCount } from '../loading/slice';
import { actions } from './slice';

export const getUsers = () => async dispatch => {
  try {
    dispatch(incrementRequestCount());

    const payload = await usersApi.getUsers();

    dispatch(actions.getUsers(payload));
  } catch (err) {
    window.alert(`Failed to fetch users: ${err.message}`);
  } finally {
    dispatch(decrementRequestCount());
  }
};

export const getUser = id => async dispatch => {
  try {
    dispatch(incrementRequestCount());

    const payload = await usersApi.getUser(id);

    dispatch(actions.getUser(payload));
  } catch (err) {
    window.alert(`Failed to fetch user: ${err.message}`);
  } finally {
    dispatch(decrementRequestCount());
  }
};

export const createUser = user => async dispatch => {
  try {
    dispatch(incrementRequestCount());

    const payload = await usersApi.createUser(user);

    dispatch(actions.createUser(payload));
  } catch (err) {
    window.alert(`Failed to create user: ${err.message}`);
  } finally {
    dispatch(decrementRequestCount());
  }
};

export const editUser = user => async dispatch => {
  try {
    dispatch(incrementRequestCount());

    const payload = await usersApi.editUser(user);

    dispatch(actions.editUser(payload));
  } catch (err) {
    window.alert(`Failed to edit user: ${err.message}`);
  } finally {
    dispatch(decrementRequestCount());
  }
};
