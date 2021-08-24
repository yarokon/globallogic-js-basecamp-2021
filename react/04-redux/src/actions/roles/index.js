import { FETCH_ROLES_SUCCESS } from '../types';

import rolesApi from '../../api/rolesApi';
import { showLoadingPopup, hideLoadingPopup } from '../loading';

export const getRoles = () => async dispatch => {
  try {
    dispatch(showLoadingPopup());

    const payload = await rolesApi.getRoles();

    dispatch({
      type: FETCH_ROLES_SUCCESS,
      payload,
    });
  } catch (err) {
    window.alert(`Failed to fetch roles: ${err.message}`);
  } finally {
    dispatch(hideLoadingPopup());
  }
};
