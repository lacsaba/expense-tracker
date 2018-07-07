import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';

import configureStore from './store/configureStore';
import {watchCategories} from "./store/sagas";
import routes from './routes';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore();

sagaMiddleware.run(watchCategories);

ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
