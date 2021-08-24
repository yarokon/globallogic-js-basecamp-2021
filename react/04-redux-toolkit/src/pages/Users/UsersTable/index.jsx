import { useRouteMatch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useDidMount from '../../../hooks/useDidMount';
import { getUsers } from '../../../features/users';
import { MODE } from '../../../constants';
import { ID, USERNAME, ROLE, TIMESTAMP } from '../constants';
import Actions from './Actions';
import './index.scss';

function UsersTable() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();
  const users = useSelector(state => state.users);

  useDidMount(() => {
    if (!users.isFetched) {
      dispatch(getUsers());
    }
  });

  return (
    <div className="UsersTable">
      <Link to={`${url}/user/${MODE.CREATE}`}>Create User</Link>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Last Updated At</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.list.map(user => (
            <tr key={user[ID]}>
              <td>{user[ID]}</td>
              <td>{user[USERNAME]}</td>
              <td>{user[ROLE]}</td>
              <td>{user[TIMESTAMP]}</td>
              <td>
                <Actions id={user[ID]} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersTable;
