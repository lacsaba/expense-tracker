import React from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './components/App';
import CategoryPage from './components/category/CategoryPage';

export default (
  <Router>
    <div>
      <Route path="/" component={App}/>
      <Route exact path="/categories" component={CategoryPage} />
    </div>
  </Router>
);
