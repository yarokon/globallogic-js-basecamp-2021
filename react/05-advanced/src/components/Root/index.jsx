import { StrictMode } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ErrorBoundary from '../ErrorBoundary';
import AdminProvider from '../../pages/Admin/AdminProvider';

function Root({ children }) {
  return (
    <StrictMode>
      <ErrorBoundary>
        <AdminProvider>
          <Router basename="/globallogic-js-basecamp-2021/react/05-advanced/build">
            {children}
          </Router>
        </AdminProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}

export default Root;
