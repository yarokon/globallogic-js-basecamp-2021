import { useContext } from 'react';

import { AdminContext } from '../pages/Admin/AdminProvider';

const withAdmin = WrappedComponent => props => {
  const [isAdmin] = useContext(AdminContext);

  return isAdmin ? (
    <WrappedComponent {...props} />
  ) : (
    // <Redirect to="/" />
    <h1 style={{ color: 'red' }}>Access Denied</h1>
  );
};

export default withAdmin;
