import { NavLink } from 'react-router-dom';
import './styles.scss';

function SideBar() {
  return (
    <div className="SideBar">
      <ul>
        <li>
          <NavLink to="/users" activeClassName="bold">
            Users
          </NavLink>
        </li>

        <li>
          <NavLink to="/counter" activeClassName="bold">
            Counter
          </NavLink>
        </li>

        <li>
          <NavLink to="/todo-list" activeClassName="bold">
            Todo List
          </NavLink>
        </li>

        <li>
          <NavLink to="/atm" activeClassName="bold">
            ATM
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;
