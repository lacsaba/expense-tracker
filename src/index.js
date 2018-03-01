import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import routes from './routes';
import { loadCategories } from "./actions/categoryActions";
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();
store.dispatch(loadCategories());

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
