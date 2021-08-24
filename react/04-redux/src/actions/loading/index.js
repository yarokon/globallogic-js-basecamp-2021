import { INCREMENT_REQUESTS_COUNT, DECREMENT_REQUESTS_COUNT } from '../types';

export const showLoadingPopup = () => ({
  type: INCREMENT_REQUESTS_COUNT,
});

export const hideLoadingPopup = () => ({
  type: DECREMENT_REQUESTS_COUNT,
});
