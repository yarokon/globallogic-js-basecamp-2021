import {
  FETCH_USERS_SUCCESS,
  FETCH_USER_SUCCESS,
  CREATE_USER_SUCCESS,
  EDIT_USER_SUCCESS,
} from '../types';

import { showLoadingPopup, hideLoadingPopup } from '../loading';
import usersApi from '../../api/usersApi';

export const getUsers = () => async dispatch => {
  try {
    dispatch(showLoadingPopup());

    const payload = await usersApi.getUsers();

    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload,
    });
  } catch (err) {
    window.alert(`Failed to fetch users: ${err.message}`);
  } finally {
    dispatch(hideLoadingPopup());
  }
};

export const getUser = id => async dispatch => {
  try {
    dispatch(showLoadingPopup());

    const payload = await usersApi.getUser(id);

    dispatch({
      type: FETCH_USER_SUCCESS,
      payload,
    });
  } catch (err) {
    window.alert(`Failed to fetch user: ${err.message}`);
  } finally {
    dispatch(hideLoadingPopup());
  }
};

export const createUser = user => async dispatch => {
  try {
    dispatch(showLoadingPopup());

    const payload = await usersApi.createUser(user);

    dispatch({
      type: CREATE_USER_SUCCESS,
      payload,
    });
  } catch (err) {
    window.alert(`Failed to create user: ${err.message}`);
  } finally {
    dispatch(hideLoadingPopup());
  }
};

export const editUser = user => async dispatch => {
  try {
    dispatch(showLoadingPopup());

    const payload = await usersApi.editUser(user);

    dispatch({
      type: EDIT_USER_SUCCESS,
      payload,
    });
  } catch (err) {
    console.log(err);

    window.alert(`Failed to edit user: ${err.message}`);
  } finally {
    dispatch(hideLoadingPopup());
  }
};
