import { useContext } from 'react';

import { AdminContext } from '../pages/Admin/AdminProvider';

const AdminProtector = ({ children }) => {
  const [isAdmin] = useContext(AdminContext);

  return isAdmin ? children : null;
};

export default AdminProtector;
