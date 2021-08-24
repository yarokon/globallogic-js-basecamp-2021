import { Switch, Redirect, Route } from 'react-router-dom';

import Users from '../../pages/Users';
import Loading from '../Loading';
import SideBar from '../SideBar';
import Counter from '../../pages/Counter';
import TodoList from '../../pages/TodoList';
import Atm from '../../pages/Atm';

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

          <Route path="/counter">
            <Counter />
          </Route>

          <Route path="/todo-list">
            <TodoList />
          </Route>

          <Route path="/atm">
            <Atm />
          </Route>
        </Switch>
      </main>

      <Loading />
    </div>
  );
}

export default App;
