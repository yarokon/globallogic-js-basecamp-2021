import { useContext } from 'react';

import { AdminContext } from '../AdminProvider';
import './styles.scss';

function AdminToggle() {
  const [isAdmin, setIsAdmin] = useContext(AdminContext);

  return (
    <div className="AdminToggle">
      <label>
        <span>Is Admin</span>
        <input type="checkbox" checked={isAdmin} onChange={e => setIsAdmin(e.target.checked)} />
      </label>
    </div>
  );
}

export default AdminToggle;
