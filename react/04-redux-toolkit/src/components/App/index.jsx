import { Switch, Redirect, Route } from 'react-router-dom';

import SideBar from '../SideBar';
import Users from '../../pages/Users';
import TodoList from '../../pages/TodoList';
import Loading from '../Loading';

function App() {
  return (
    <div className="App">
      <SideBar />

      <main>
        <Switch>
          <Redirect exact from="/" to="/users" />

          <Route path="/users">
            <Users />
          </Route>

          <Route path="/todo-list">
            <TodoList />
          </Route>
        </Switch>
      </main>

      <Loading />
    </div>
  );
}

export default App;
