import { NavLink } from 'react-router-dom';

import AdminProtector from '../../renderProps/AdminProtector';
import './styles.scss';

function SideBar() {
  return (
    <div className="SideBar">
      <ul>
        <li>
          <NavLink to="/todo-list" activeClassName="bold">
            Todo List
          </NavLink>
        </li>

        <li>
          <NavLink to="/reusing-logic" activeClassName="bold">
            Reusing Logic
          </NavLink>
        </li>

        <AdminProtector>
          <li>
            <NavLink to="/admin" activeClassName="bold">
              Admin
            </NavLink>
          </li>
        </AdminProtector>
      </ul>
    </div>
  );
}

export default SideBar;
