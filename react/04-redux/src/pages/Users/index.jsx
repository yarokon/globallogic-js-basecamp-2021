import { Switch, Route, useRouteMatch } from 'react-router-dom';

import { MODE } from '../../constants';
import UsersTable from './UsersTable';
import UserForm from './UserForm';

function Users() {
  const { path } = useRouteMatch();

  return (
    <div className="App">
      <Switch>
        <Route exact path={path}>
          <UsersTable />
        </Route>

        <Route
          exact
          path={`${path}/user/:mode(${MODE.VIEW}|${MODE.CREATE}|${MODE.EDIT})/:id?`}
        >
          <UserForm />
        </Route>
      </Switch>
    </div>
  );
}

export default Users;
