import { Switch, Redirect, Route } from 'react-router-dom';

import Users from '../Users';

function App() {
  return (
    <div className="App">
      <Switch>
        <Redirect exact from="/" to="/users" />

        <Route path="/users">
          <Users />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
