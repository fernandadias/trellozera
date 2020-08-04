import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import NewVideo from './pages/NewVideo';
import EmptyPage from './pages/EmptyPage';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/video/new" component={NewVideo} />
      <Route component={EmptyPage} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
