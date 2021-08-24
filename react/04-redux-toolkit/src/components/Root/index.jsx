import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../store';

function Root({ children }) {
  return (
    <StrictMode>
      <Provider store={store}>
        <Router basename="/globallogic-js-basecamp-2021/react/04-redux-toolkit/build">
          {children}
        </Router>
      </Provider>
    </StrictMode>
  );
}

export default Root;
