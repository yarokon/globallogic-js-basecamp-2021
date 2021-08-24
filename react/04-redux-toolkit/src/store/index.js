import { configureStore } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';

import { reducer as loading } from '../features/loading';
import { reducer as users } from '../features/users';
import { reducer as roles } from '../features/roles';
import { reducer as todos } from '../features/todos';

const logger = createLogger({ collapsed: true });

export default configureStore({
  reducer: {
    loading,
    users,
    roles,
    todos,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
