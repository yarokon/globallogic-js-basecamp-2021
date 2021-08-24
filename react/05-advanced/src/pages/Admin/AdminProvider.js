import { createContext } from 'react';

import useLocalStorage from '../../hooks/useLocalStorage';

export const AdminContext = createContext(null);

function AdminProvider({ children }) {
  const state = useLocalStorage('isAdmin', true);

  return <AdminContext.Provider value={state}>{children}</AdminContext.Provider>;
}

export default AdminProvider;
