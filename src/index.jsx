import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewVideo from './pages/NewVideo';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/video/new" component={NewVideo} />
      {/* <Route component={404} /> */}
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
