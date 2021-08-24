import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import store from '../../store';
import CounterProvider from '../../pages/Counter/CounterProvider';
import TodoListProvider from '../../pages/TodoList/TodoListProvider';

function Root({ children }) {
  return (
    <StrictMode>
      <Provider store={store}>
        <CounterProvider>
          <TodoListProvider>
            <Router basename="/globallogic-js-basecamp-2021/react/04-redux/build">
              {children}
            </Router>
          </TodoListProvider>
        </CounterProvider>
      </Provider>
    </StrictMode>
  );
}

export default Root;
