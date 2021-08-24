import { NavLink } from 'react-router-dom';
import './styles.scss';

function SideBar() {
  return (
    <aside className="SideBar">
      <ul>
        <li>
          <NavLink to="/users" activeClassName="bold">
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/todo-list" activeClassName="bold">
            Todo List
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
