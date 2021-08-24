import { Switch, Route } from 'react-router-dom';

import SideBar from '../SideBar';
import TodoList from '../../pages/TodoList';
import ReusingLogic from '../../pages/ReusingLogic';
import Admin from '../../pages/Admin';
import AdminToggle from '../../pages/Admin/AdminToggle';

function App() {
  return (
    <div className="App">
      <SideBar />

      <main>
        <Switch>
          <Route path="/todo-list">
            <TodoList />
          </Route>

          <Route path="/reusing-logic">
            <ReusingLogic />
          </Route>

          <Route path="/admin">
            <Admin />
          </Route>
        </Switch>
      </main>

      <AdminToggle />
    </div>
  );
}

export default App;
