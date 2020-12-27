import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import { YupDemo } from './YupDemo';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          &nbsp;|&nbsp;
          <Link to="/yup-demo">Yup Demo</Link>
        </header>
        <Switch>
          <Route path="/yup-demo">
            <YupDemo />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
