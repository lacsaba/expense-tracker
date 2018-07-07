import React from 'react';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

import App from './containers/App';
import asyncComponent from './hoc/asyncComponent/asyncComponent';

const asyncAuth = asyncComponent(() => {
  return import('./containers/Auth/Auth');
});

const asyncCategoryPage = asyncComponent(() => {
  return import('./containers/Category/CategoryPage');
});
export default (
  <Router>
    <Switch>
      <Route path="/auth" component={asyncAuth}/>
      <Route path="/" component={App}/>
      <Route exact path="/categories" component={asyncCategoryPage}/>
    </Switch>
  </Router>
);
