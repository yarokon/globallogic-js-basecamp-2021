import { combineReducers } from 'redux';

import users from './users';
import roles from './roles';
import loading from './loading';
import atm from './atm';

const rootReducer = combineReducers({
  users,
  roles,
  loading,
  atm,
});

export default rootReducer;
